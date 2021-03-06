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

export const HorsePowerDefinition: ICommandDefinition = {
    name: "average-horse-power",
    summary: "Average horse power of cars",
    description: "Get the average horse power of all cars in the system",
    type: "command",
    handler: __dirname + "/HorsePower.handler"
};

