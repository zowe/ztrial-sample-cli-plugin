/**
 * This program and the accompanying materials are made available and may be used, at your option, under either:
 * * Eclipse Public License v2.0, available at https://www.eclipse.org/legal/epl-v20.html, OR
 * * Apache License, version 2.0, available at http://www.apache.org/licenses/LICENSE-2.0
 *
 * SPDX-License-Identifier: EPL-2.0 OR Apache-2.0
 *
 * Copyright Contributors to the Zowe Project.
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
