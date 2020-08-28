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

import { IImperativeConfig } from "@zowe/imperative";

const config: IImperativeConfig = {
    commandModuleGlobs: ["**/cli/*/*.definition!(.d).*s"],
    pluginHealthCheck: __dirname + "/healthCheck.Handler",
    rootCommandDescription: "ztrial plugin to access ztrial api for CLI",
    envVariablePrefix: "ZTRIAL_CLI_PLUGIN",
    productDisplayName: "zTrial CLI Plugin",
    defaultHome: "~/.ztrial_cli_plugin",
    name: "zTrialPlugin"
};

export = config;

