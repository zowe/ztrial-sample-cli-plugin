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

export const HorsePowerForAccountDefinition: ICommandDefinition = {
    name: "average-horse-power-for-account",
    summary: "Average horse power of cars owned by an account",
    description: "Get the average horse power of cars owned by an account, returns an error if the account owns no cars",
    type: "command",
    handler: __dirname + "/HorsePowerForAccount.handler",
    positionals: [
        {
            name: "accountId",
            description: "The account id",
            type: "number",
            required: true
        }
    ]
};

