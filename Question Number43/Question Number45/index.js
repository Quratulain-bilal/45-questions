"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function storeCarInfo(manufacture, modelName, ...extraOption) {
    const carInfo = {
        manufacture,
        modelName,
        ...Object.assign({}, ...extraOption)
    };
    return carInfo;
}
;
let answer = storeCarInfo(`honda`, `civic`, { color: `black` }, { features: [`navigation`, `powerwindow`] });
console.log(answer);
