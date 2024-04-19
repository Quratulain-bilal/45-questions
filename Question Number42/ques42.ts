function show_magicians(magicians:string[]){
magicians.forEach(name =>console.log(name));
    
}


function make_great (magicians:string[]){
   return magicians.map(name =>  `The great ${name}`);


}



let magicians_names = ["harrypotter","annashah","kainat"];


let great_magician = make_great(magicians_names);

show_magicians(great_magician)


 

