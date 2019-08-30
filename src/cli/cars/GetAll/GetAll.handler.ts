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

import { ICommandHandler, IHandlerParameters, IProfile  } from "@brightside/imperative";
import { Cars } from "../../../api/Cars";
import ZTrialBaseHandler from "../../ZTrialBaseHandler";
import MQSCCommand from "../../../api/MQSCCommand";
import { IZTrialResponse } from "../../../api/doc/IZTrialResponse";
import { ZTrialSession} from "../../../api/rest/ZTrialSession";

// export default class GetAllHandler extends ZTrialBaseHandler {
//     public async process(params: IHandlerParameters): Promise<void> {
//         try {
//             const response = await Cars.getAll();
//             params.response.console.log(JSON.stringify(response.data));
//         } catch (err) {
//             params.response.console.log(err);
//         }
//     }
// }
/**
 * Command handler for MQSC script commands
 * @export
 * @class MQSCCommandHandler
 * @implements {ICommandHandler}
 */
export default class GetAllHandler extends ZTrialBaseHandler {
    /**
     * Process the MQSC script command.
     * @param {IHandlerParameters} params
     * @returns {Promise<void>}
     * @memberof MQSCCommandHandler
     */
    public async processWithSession(params: IHandlerParameters, session: ZTrialSession, profile: IProfile ): Promise<IZTrialResponse> {
        return MQSCCommand.qmgrAction(session, params.arguments.qmgr, params.arguments.cmd);
    }
}
