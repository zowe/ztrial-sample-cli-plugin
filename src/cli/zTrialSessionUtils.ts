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

import { ICommandArguments, ICommandOptionDefinition, IProfile, Logger, Session } from "@brightside/imperative";

/**
 * Utility Methods for Zowe
 * @export
 */
export class ZTrialSessionUtils {

    public static ZTRIAL_CONNECTION_OPTION_GROUP = "zTrial Connection Options";

    /**
     *
     * Option used in profile creation and commands for hostname for zTrial
     */
    public static ZTRIAL_OPTION_HOST: ICommandOptionDefinition = {
        name: "host",
        aliases: ["H"],
        description: "The host name used to access the IBM zTrial REST API. " +
            "This might be the host name of the IBM zTrial web server, or the Zowe API Mediation Layer..",
        type: "string",
        required: false,
        group: ZTrialSessionUtils.ZTRIAL_CONNECTION_OPTION_GROUP
    };

    /**
     * Option used in profile creation and commands for port for zTrial
     */
    public static ZTRIAL_OPTION_PORT: ICommandOptionDefinition = {
        name: "port",
        aliases: ["P"],
        description: "The port number used to access the IBM zTrial REST API. " +
            "This might be the port number of the IBM zTrial mqweb server, or the Zowe API Mediation Layer.",
        type: "number",
        required: false,
        group: ZTrialSessionUtils.ZTRIAL_CONNECTION_OPTION_GROUP
    };

    /**
     * Option used in profile creation and commands for username / ID  for zTrial
     */
    public static ZTRIAL_OPTION_USER: ICommandOptionDefinition = {
        name: "user",
        aliases: ["u"],
        description: "The mainframe (zTrial) user name, which can be the same as your TSO login.",
        type: "string",
        required: false,
        group: ZTrialSessionUtils.ZTRIAL_CONNECTION_OPTION_GROUP
    };

    /**
     * Option used in profile creation and commands for password/passphrase for zTrial
     */
    public static ZTRIAL_OPTION_PASSWORD: ICommandOptionDefinition = {
        name: "password",
        aliases: ["pass", "pw"],
        description: "The mainframe (zTrial) password, which can be the same as your TSO password.",
        type: "string",
        group: ZTrialSessionUtils.ZTRIAL_CONNECTION_OPTION_GROUP,
        required: false
    };

    /**
     * Option used in profile creation and commands for rejectUnauthorized setting for connecting to FMP
     */
    public static ZTRIAL_OPTION_REJECT_UNAUTHORIZED: ICommandOptionDefinition = {
        name: "reject-unauthorized",
        aliases: ["ru"],
        description: "Reject self-signed certificates.",
        type: "boolean",
        defaultValue: false,
        required: false,
        group: ZTrialSessionUtils.ZTRIAL_CONNECTION_OPTION_GROUP
    };
    /**
     * Option used in profile creation and commands for protocol for zTrial
     */
    public static ZTRIAL_OPTION_PROTOCOL: ICommandOptionDefinition = {
        name: "protocol",
        aliases: ["o"],
        description: "Specifies the zTrial protocol (http or https).",
        type: "string",
        defaultValue: "http",
        required: false,
        allowableValues: {values: ["http", "https"], caseSensitive: false},
        group: ZTrialSessionUtils.ZTRIAL_CONNECTION_OPTION_GROUP
    };

    /**
     * Options related to connecting to zTrial
     * These options can be filled in if the user creates a profile
     */
    public static ZTRIAL_CONNECTION_OPTIONS: ICommandOptionDefinition[] = [
        ZTrialSessionUtils.ZTRIAL_OPTION_HOST,
        ZTrialSessionUtils.ZTRIAL_OPTION_PORT,
        ZTrialSessionUtils.ZTRIAL_OPTION_USER,
        ZTrialSessionUtils.ZTRIAL_OPTION_PASSWORD,
        ZTrialSessionUtils.ZTRIAL_OPTION_REJECT_UNAUTHORIZED,
        ZTrialSessionUtils.ZTRIAL_OPTION_PROTOCOL
    ];

    /**
     * Given a zTrial profile, create a REST Client Session.
     * @static
     * @param {IProfile} profile - The zTrial profile contents
     * @returns {Session} - A session for usage in the zTrial REST Client
     */
    public static createBasiczTrialSession(profile: IProfile): Session {
        ZTrialSessionUtils.log.trace("Creating an zTrial session from the profile named %s", profile.name);
        return new Session({
            type: "basic",
            hostname: profile.host,
            port: profile.port,
            user: profile.user,
            password: profile.password,
            basePath: profile.basePath,
            rejectUnauthorized: profile.rejectUnauthorized,
            protocol: profile.protocol || "https",
        });
    }

    /**
     * Given a zTrial profile, create a REST Client Session.
     * @static
     * @param {IProfile} profile - The zTrial profile contents
     * @returns {Session} - A session for usage in the zTrial REST Client
     */
    public static createBasiczTrialSessionFromArguments(args: ICommandArguments): Session {
        ZTrialSessionUtils.log.trace("Creating an zTrial session from arguments", args.name);
        return new Session({
            type: args.password && args.user? "basic": "none",
            hostname: args.host,
            port: args.port,
            user: args.user,
            password: args.password,
            basePath: args.basePath,
            rejectUnauthorized: args.rejectUnauthorized,
            protocol: args.protocol || "https",
        });
    }

    /**
     * Internal logger
     */
    private static mLogger: Logger;

    /**
     * Use the Brightside logger instead of the imperative logger
     * @return {Logger}
     */
    private static get log(): Logger {
        if (this.mLogger == null) {
            this.mLogger = Logger.getAppLogger();
        }
        return this.mLogger;
    }
}
