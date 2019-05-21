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

import * as https from "https";
import axios from "axios";

const rp = axios.create({
    httpsAgent: new https.Agent({
      rejectUnauthorized: false
    }),
    responseType: "json"
  });

const baseURI: string = "https://s0w1:7554/api/v1/sample-cli-api/cli";

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

    public static async getCarsCount(id: number) {
        try {
            const response = await Accounts.getCarsByAccount(id);
            const {data: cars} = response;
            return cars.length;
        } catch (err) {
            return err;
        }
    }

}
