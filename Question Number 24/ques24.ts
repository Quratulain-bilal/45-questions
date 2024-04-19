let apple = "apple";
let uppercaseApple = "APPLE";
let ten =10;
let nine =9;
let fruit = ["apple","banana","orange"];

//test for equaliTy and inequality

console.log(" is apple is equal to apple");
console.log(apple =="apple");

console.log(apple !== "apple");


//tests using lowercase funtion

console.log("is Apple is equal to apple after converting to lowercase");
console.log(uppercaseApple.toLowerCase() =="apple");

console.log("is Apple is not equal to apple after converting to lowercase");
console.log(uppercaseApple.toLowerCase() !="apple");


//numerical tests


//is equal to
console.log("is ten is equal to nine?");
console.log(ten == 9);

//is not equal to
console.log("is ten is not equal to 20?");
console.log(ten != 9 );


//greater than
console.log("is ten is greater than 4?");
console.log(ten > 4 );

//less than
console.log("is nine is less than 7?");
console.log(nine < 7);


//greater than equal to
console.log("is ten is equal to or greater than 3?");
console.log(ten >= 3);

//less than or is equal to
console.log("is ten is less than or equal to 8?");
console.log(ten <= 8);



//tests using "and" & "or" operation

//using "and"
console.log("ten is not equal to 9 and ten is greater than 9?");
console.log(ten != 9 && ten > 9);

console.log("ten is not equal to 4 and ten is   greater than 11?");
console.log(ten != 4 && ten > 11);
 
//using "or"
console.log("ten is equal to 3")

//greater than or is equal to
console.log("10 is greater than or is equal to 3?");
console.log(ten >= 3 );

//less than or is equal to
console.log("ten is  less than or is equal to 6? ");
console.log(ten <= 6);

//using and
console.log("ten is  not equal to 7 and  10 is greater than 8");
console.log( ten !=  7 && ten > 8 );


console.log("ten is  not equal to 3 and 10 is less than 11?");
console.log(ten != 3 && ten < 11);


//using or
console.log("10 is greter than 50 or ten is equal to 9");
console.log(ten > 50 || ten == 9);

//test weather an item in array
console.log("is orange include in my array?");
console.log(fruit.includes("orange"));

console.log("is orange not includes in my array?");
console.log(!fruit.includes("orange")
);






















 




