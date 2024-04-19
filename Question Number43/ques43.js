"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function show_magicians(magicians) {
    magicians.forEach(name => console.log(name));
}
function make_great(magicians) {
    return magicians.map(name => `The great ${name}`);
}
let magicians_names = ["harrypotter", "annashah", "kainat"];
//making a copy of original array through slice function
let copy_magician_names = magicians_names.slice();
//modify the copied array to include the great
let copy_great_magicians = make_great(copy_magician_names);
show_magicians(magicians_names);
show_magicians(copy_great_magicians);
