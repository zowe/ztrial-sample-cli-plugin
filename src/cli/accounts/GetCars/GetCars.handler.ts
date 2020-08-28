/*
* This program and the accompanying materials are made available under the terms of the
* Eclipse Public License v2.0 which accompanies this distribution, and is available at
* https://www.eclipse.org/legal/epl-v20.html
*
* SPDX-License-Identifier: EPL-2.0
*
* Copyright Contributors to the Zowe Project.
*
*/

import { ICommandHandler, IHandlerParameters } from "@zowe/imperative";
import { Accounts } from "../../../api/Accounts";

export default class DataSetsDiffHandler implements ICommandHandler {
    public async process(params: IHandlerParameters): Promise<void> {
        try {
            const {accountId, counts} = params.arguments;

            let response;
            if (accountId === "all") {
                response = await this.getAllAccountCars({counts});
            }  else {
                let id: number;
                id = parseInt(accountId, 10);
                if (isNaN(id)) { throw new Error('not a valid value for accountId'); }
                
                response = await this.getAccountCars(id, {counts}); 
            }

            params.response.console.log(JSON.stringify(response));
        }   catch (err) {
            params.response.console.log(err);
        }
    }

    private async getAccountCars(accountId: number, options: any) {
        const { counts } = options; 
        const response = await Accounts.getCarsByAccount(accountId);
        const {data: cars} =  response; 
         
        //Missing feature
        //un-comment to handle case when if count is true

        /*if(counts) {
            return {accountId, carCount: cars.length};
        }*/
        
        
        return {accountId, cars};
    }

    private async getAllAccountCars(options: any) {
        const accounts = await Accounts.getAll();
        const ids = accounts.data.map((acc: any) => acc._id);
        const allAccountCars = await Promise.all(ids.map( async (accountId: number) => this.getAccountCars(accountId, options)));
        return allAccountCars;
    }
}
