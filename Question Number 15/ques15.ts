let guestlist:string[]=["anamta","shan","nimra","anjili"];
let dontcome = guestlist[0];
console.log(dontcome, "will not come");
guestlist.splice(0,1,"sania");
guestlist.forEach(guest => console.log( `salam ${guest}, would you like to dinner with me?`))