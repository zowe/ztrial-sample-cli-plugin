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

import { ICommandDefinition } from "@brightside/imperative";

export const GetAccountCarsDefinition: ICommandDefinition = {
    name: "get-cars",
    summary: "Get all cars owned by an account",
    description: "Get all the cars owned by an account, returns an error if the account owns no cars",
    type: "command",
    handler: __dirname + "/GetCars.handler",
    positionals: [
        {
            name: "accountId",
            description: "The account id",
            type: "number",
            required: true
        }
    ],
    options: [
        {
            name: "count",
            description: "true if you want car count",
            type: "boolean"        
        }
    ]
};

