"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function city_country(city, country) {
    return `${city},${country}`;
}
//calling function
city_country("karachi", "pakistan");
console.log(city_country("karachi", "pakistan"));
city_country("tokyo", "japan");
console.log(city_country("tokyo", "japan"));
city_country("Berlin", "germany");
console.log(city_country("Berlin", "germany"));
