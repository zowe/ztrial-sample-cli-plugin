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

describe("imperative config", () => {

    // Will fail if imperative config object is changed. This is a sanity/protection check to ensure that any
    // changes to the configuration document are intended.
    // Removed snapshot due to pluginHealthCheck path varies from machine to machine.
    it("config should match expected values", () => {
        const config = require("../src/imperative");
        expect(config.name).toBe("ztrial-plugin");
        expect(config.productDisplayName).toBe("zTrial CLI Plugin");
        expect(config.rootCommandDescription).toContain("ztrial plugin to access ztrial api for CLI");
    });

});
