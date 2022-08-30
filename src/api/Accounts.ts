/**
 * This program and the accompanying materials are made available and may be used, at your option, under either:
 * * Eclipse Public License v2.0, available at https://www.eclipse.org/legal/epl-v20.html, OR
 * * Apache License, version 2.0, available at http://www.apache.org/licenses/LICENSE-2.0
 *
 * SPDX-License-Identifier: EPL-2.0 OR Apache-2.0
 *
 * Copyright Contributors to the Zowe Project.
 */

import * as https from "https";
import axios from "axios";

const rp = axios.create({
    httpsAgent: new https.Agent({
        rejectUnauthorized: false
    }),
    responseType: "json"
});

const baseURI: string = "http://s0w1:17000";

export class Accounts {

    public static async get(id: number) {
        return rp.get(`${baseURI}/accounts/${id}`);
    }

    public static async getAll() {
        return rp.get(`${baseURI}/accounts`);
    }

    public static async getCarsByAccount(id: number) {
        return rp(`${baseURI}/accounts/${id}/cars`);
    }

    // Missing feature
    // uncomment to add api extension to count cars
    /*
    public static async getCarsCount(id: number) {
        try {
            const response = await Accounts.getCarsByAccount(id);
            const {data: cars} = response;
            return cars.length;
        } catch (err) {
            return err;
        }
    }
    */

}
