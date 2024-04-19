import { features } from "process"
import { toASCII } from "punycode";

function storeCarInfo(manufacture:string,modelName:string,...extraOption:{[key:string]:any}[]){
    const carInfo ={
        manufacture,
        modelName,
        ...Object.assign({},...extraOption)
    }
    return carInfo
};

let answer = storeCarInfo(`honda`,`civic`,{color:`black`},{features:[`navigation`,`powerwindow`]})
console.log(answer);