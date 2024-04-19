// creating a guet list arry

let guestlist: string []=["nadi","anamta","sania","aleena"];


//list of those guests who wil not come

let dontcome =guestlist [0];

//print the name of guests cant come

console.log(dontcome ,"will not come");


//Add and remove value of arrays from guest list array

guestlist.splice(0,1, "nadi");


//Message print for bigger table

console.log("Good news ! we have found a bigger table for dinner.");

//adding a new value in index starting 

guestlist.unshift("aiman");


//adding a value in index ending


guestlist.push("anjum");


//get a value in index middle


let middleIndex:number =Math.floor(guestlist.length /2);


//adding value in middle

guestlist.splice(middleIndex, 0 ,"salah");

console.log("updated list of my guests");

guestlist.forEach(oneguest => console.log(`salam ${oneguest},would you like to dinner with me`));









