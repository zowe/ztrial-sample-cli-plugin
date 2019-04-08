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
import { GetDefinition } from "./Get/Get.definition";
import { GetAllDefinition } from "./GetAll/GetAll.definition";
import { GetAccountCarsDefinition } from "./GetCars/GetCars.definition";
import { GetAccountCarsCountDefinition } from "./GetCarsCount/GetAccountCarsCount.definition";


const AccountsDefinition: ICommandDefinition = {
    name: "accounts",
    summary: "get some accounts info",
    description: "search the zTrial api for information about accounts and their cars",
    type: "group",
    children: [
        GetDefinition,
        GetAllDefinition,
        GetAccountCarsDefinition,
        GetAccountCarsCountDefinition                   
    ]
};

export = AccountsDefinition;
