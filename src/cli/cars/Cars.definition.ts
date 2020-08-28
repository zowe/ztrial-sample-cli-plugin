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
import { HorsePowerForAccountDefinition } from "./HorsePowerForAccount/HorsePowerForAccount.definition";
import { HorsePowerDefinition } from "./HorsePower/HorsePower.definition";
import { GetDefinition } from "./Get/Get.definition";
import { GetAllDefinition } from "./GetAll/GetAll.definition";

const CarsDefinition: ICommandDefinition = {
    name: "cars",
    summary: "get some cars info",
    description: "search the zTrial api for information cars about cars and their owners",
    type: "group",
    children: [
        HorsePowerForAccountDefinition,
        HorsePowerDefinition,
        GetDefinition,
        GetAllDefinition,
    ]
};

export = CarsDefinition;
