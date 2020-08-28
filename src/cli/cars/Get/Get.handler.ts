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

import { ICommandHandler, IHandlerParameters } from "@zowe/imperative";
import { Cars } from "../../../api/Cars";

export default class DataSetsDiffHandler implements ICommandHandler {
    public async process(params: IHandlerParameters): Promise<void> {
        try {
            const carId = params.arguments.carId;
            const response = await Cars.get(carId);
            params.response.console.log(JSON.stringify(response.data));
        } catch (err) {
            params.response.console.log(err);
        }
    }
}
