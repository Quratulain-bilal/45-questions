"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function storeCarInformation(manufacture, model, ...options) {
    const carInfo = {
        manufacture,
        model,
        ...Object.assign({}, ...options)
    };
    return carInfo;
}
;
let anwer = storeCarInformation(`Civic`, `honda`, { color: `black` }, { feartures: [`navigation`, `power window`] });
console.log(anwer);
