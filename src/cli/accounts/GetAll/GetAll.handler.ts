/**
 * This program and the accompanying materials are made available and may be used, at your option, under either:
 * * Eclipse Public License v2.0, available at https://www.eclipse.org/legal/epl-v20.html, OR
 * * Apache License, version 2.0, available at http://www.apache.org/licenses/LICENSE-2.0
 *
 * SPDX-License-Identifier: EPL-2.0 OR Apache-2.0
 *
 * Copyright Contributors to the Zowe Project.
 */

import { ICommandHandler, IHandlerParameters } from "@zowe/imperative";
import { Accounts } from "../../../api/Accounts";

export default class DataSetsDiffHandler implements ICommandHandler {
    public async process(params: IHandlerParameters): Promise<void> {
        try {
            const response = await Accounts.getAll();
            params.response.console.log(JSON.stringify(response.data));
        } catch (err) {
            params.response.console.log(err);
        }
    }
}
