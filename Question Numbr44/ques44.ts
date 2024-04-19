function make_Sandwich(...items : string[]){
    console.log("\n making sandwich with followig items\n");
    items.forEach(singleitem =>console.log(singleitem));

    console.log("\nnow enjoy sandwich");
}


make_Sandwich("chiken","mayo","egg");

make_Sandwich("bread","butter");


make_Sandwich("bread","butter","chiken","mayo","chese");