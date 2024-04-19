let userNames = ["annie","maria","shan","admin"];

userNames.forEach(oneuser =>{
    if(oneuser  === "admin"){
        console.log(`Hello ${oneuser},would you like to see a status report`)}

    else{
        console.log(`Hello ${oneuser} thankyou for logging in again`)
    }
})