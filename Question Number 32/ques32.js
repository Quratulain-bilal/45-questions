"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let currentUsers = ["ananmta", "shan", "annie", "salalh", "aiman"];
let newUsers = ["anamta", "shan", "sunny", "nimra", "maria"];
newUsers.forEach(new_one_user => {
    let our_condition = currentUsers.some(current_one_user => current_one_user.toLowerCase()
        === new_one_user.toLowerCase());
    if (our_condition) {
        console.log(`sorry ${new_one_user} is already taken`);
    }
    else {
        console.log(`this  user name ${new_one_user} is available`);
    }
});
