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

export const AddRelationshipDefinition: ICommandDefinition = {
    name: "add-car-account-relationship",
    summary: "Connect a car with an account",
    description: "Relate a car and account together using their ID values",
    type: "command",
    handler: __dirname + "/AddRelationship.handler",
    positionals: [
        {
            name: "carId",
            description: "The car id",
            type: "number",
            required: true
        },
        {
            name: "accountId",
            description: "The account id",
            type: "number",
            required: true
        }
    ]
};

