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

export const GetDefinition: ICommandDefinition = {
    name: "get-car",
    summary: "Get a single car by id",
    description: "Get a single car by id from the api",
    type: "command",
    handler: __dirname + "/Get.handler",
    positionals: [
        {
            name: "carId",
            description: "The car id",
            type: "number",
            required: true
        }
    ]
};

