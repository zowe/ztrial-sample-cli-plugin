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

import { ICommandHandler, IHandlerParameters } from "@brightside/imperative";
import { Accounts } from "../../../api/Accounts";

export default class DataSetsDiffHandler implements ICommandHandler {
    public async process(params: IHandlerParameters): Promise<void> {
        try {
            const accountId = params.arguments.accountId;
            const count = await Accounts.getCarsCount(accountId);
            params.response.console.log(count);
        } catch (err) {
            params.response.console.log(err);
        }
    }
}
