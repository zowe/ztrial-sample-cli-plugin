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

const rp = require("request-promise");

const baseURI: string = "http://127.0.0.1:3000/";

export class Cars {

    public static async get() {
        return rp(baseURI + "cars");
    }

    public static async getOwnedByAccount(id: number) {
        return rp(baseURI + "accounts/" + id + "/cars");
    }

    public static async getAverageHorsePower() {
        try {
            const response = await this.get();
            const cars = JSON.parse(response);
            return this.calculateAverageHorsePower(cars);
        } catch (err) {
            return err;
        }
    }

    public static async getAverageHorsePowerForAccount(id: number) {
        try {
            const response = await this.getOwnedByAccount(id);
            const cars = JSON.parse(response);
            return this.calculateAverageHorsePower(cars);
        } catch (err) {
            return err;
        }
    }

    private static calculateAverageHorsePower(cars: []){
        if (cars.length === 0){
            return new Error("No cars found");
        }
        const totalHorsePower: number = cars
            .map((car: any) => car.horsepower)
            .reduce((subtotal: number, x: number) => subtotal + x);
        return totalHorsePower / cars.length;
    }
}
