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

export class Cars {

    public static async get(id: number) {
        return rp.get(`${baseURI}/cars/${id}`);
    }

    public static async getAll() {
        return rp.get(`${baseURI}/cars`);
    }

    public static async getOwnedByAccount(id: number) {
        return rp(`${baseURI}/accounts/${id}/cars`);
    }

    public static async postRelationship(carId: number, accountId: number) {

        return rp.post(`${baseURI}/cars/${carId}/accounts/${accountId}`);
    }

    public static async getAverageHorsePower() {
        try {
            const response = await this.getAll();
            const {data: cars} = response;
            return this.calculateAverageHorsePower(cars);
        } catch (err) {
            return err;
        }
    }

    public static async getAverageHorsePowerForAccount(id: number) {
        try {
            const response = await this.getOwnedByAccount(id);
            const {data: cars} = response;
            return this.calculateAverageHorsePower(cars);
        } catch (err) {
            return err;
        }
    }

    private static calculateAverageHorsePower(cars: any){
        if (cars.length === 0){
            return new Error("No cars found");
        }
        const totalHorsePower: number = cars
            .map((car: any) => car.Horsepower)
            .reduce((subtotal: number, horsepower: number) => subtotal + horsepower);
        return totalHorsePower / cars.length;
    }
}
