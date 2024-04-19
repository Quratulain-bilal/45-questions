function storeCarInformation (manufacture:string,model:string, ...options:{[key:string]: any}[]):
object {

    const carInfo ={
        manufacture,
        model,
        ...Object.assign({},...options)
    }
    return carInfo;

} ;
 let anwer = storeCarInformation(`Civic`,`honda`,{color:`black`},{feartures:[`navigation`,`power window`]})
 console.log(anwer);