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

import { ICommandDefinition } from "@zowe/imperative";

export const GetAllDefinition: ICommandDefinition = {
    name: "get-accounts",
    summary: "Get all accounts",
    description: "Get all accounts data stored in the api",
    type: "command",
    handler: __dirname + "/GetAll.handler"
};

