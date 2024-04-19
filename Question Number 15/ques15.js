var guestlist = ["anamta", "shan", "nimra", "anjili"];
var dontcome = guestlist[0];
console.log(dontcome, "will not come");
guestlist.splice(0, 1, "sania");
guestlist.forEach(function (guest) { return console.log("salam ".concat(guest, ", would you like to dinner with me?")); });
