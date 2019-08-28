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

import { IImperativeConfig } from "@brightside/imperative";
import { ZTrialSessionUtils } from "./cli/zTrialSessionUtils";

const config: IImperativeConfig = {
    commandModuleGlobs: ["**/cli/*/*.definition!(.d).*s"],
    pluginHealthCheck: __dirname + "/healthCheck.Handler",
    rootCommandDescription: "ztrial plugin to access ztrial api for CLI",
    envVariablePrefix: "ZTRIAL_CLI_PLUGIN",
    productDisplayName: "zTrial CLI Plugin",
    defaultHome: "~/.ztrial_cli_plugin",
    name: "zTrialPlugin1",
    profiles: [
        {
          type: "zTrial",
          schema: {
            type: "object",
            title: "CLI profile for zTrial",
            description: "A zTrial profile is required to issue commands in the zTrial command group that interacts with the zTrial API. " +
                "The zTrial profile contains your host, port, user name, and password for the zTrial server",
            properties: {
              host: {
                type: "string",
                optionDefinition: {
                  name: "host",
                  aliases: ["H"],
                  description: "The zTrial Rest server host name",
                  type: "string",
                  required: true,
                }
              },
              port: {
                type: "number",
                optionDefinition: {
                  type: "number",
                  name: "port",
                  aliases: ["P"],
                  required: true,
                  description: "Port number of your zTrial REST API server"
                }
              },
              user: {
                type: "string",
                optionDefinition: {
                  type: "string",
                  name: "user",
                  aliases: ["u"],
                  required: true,
                  description: "User name to authenticate to your zTrial REST API server"
                },
                secure: true
              },
              password: {
                type: "string",
                optionDefinition: {
                  type: "string",
                  name: "password",
                  aliases: ["p"],
                  required: true,
                  implies: ["user"],
                  description: "Password to authenticate to your zTrial REST API server"
                },
                secure: true
              },
              rejectUnauthorized: {
                  type: "boolean",
                  optionDefinition: ZTrialSessionUtils.ZTRIAL_OPTION_REJECT_UNAUTHORIZED
              },
              protocol: {
                  type: "string",
                  optionDefinition: ZTrialSessionUtils.ZTRIAL_OPTION_PROTOCOL
              }
            },
            required: ["host", "port", "user", "password"],
          },
          createProfileExamples: [
            {
             options: "zTrial --host zTrial123 --port 1234 --user ibmuser --password myp4ss",
             description: "Create an zTrial profile named 'zTrialprofile' to connect to zTrial at host zos123 and port 1234"
            }
          ]
        }
    ]
};

export = config;
