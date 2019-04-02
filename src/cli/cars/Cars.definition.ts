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
import { AccountDefinition } from "./Account/Account.definition";
import { AllDefinition } from "./All/All.definition";

const CarsDefinition: ICommandDefinition = {
    name: "cars",
    summary: "get some cars",
    description: "search the zTrial api for cars",
    type: "group",
    children: [
        AccountDefinition,
        AllDefinition
    ]
};

export = CarsDefinition;
