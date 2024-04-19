let userNames = ["anamta","usman","admin","shan","kaka"];

userNames =[]

if(userNames.length === 0){

    console.log("your Array is empty we need to find some users")
    
}else{
    userNames.forEach(oneUser=>{
    if(oneUser === "admin"){
        console.log(`Hello ${oneUser},would you like to see a status`)
    }else{
        console.log(`${oneUser},thankyou for logging in again`)
    }
    })
    
}




