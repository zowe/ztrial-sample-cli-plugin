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

export const HorsePowerDefinition: ICommandDefinition = {
    name: "average-horse-power",
    summary: "Average horse power of cars",
    description: "Get the average horse power of all cars in the system",
    type: "command",
    handler: __dirname + "/HorsePower.handler"
};

