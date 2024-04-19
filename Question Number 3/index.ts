let personName = "Quratulain";
  //lowercase

  console.log(personName.toLowerCase());


  //upper case

  console.log(personName.toUpperCase());


  //titlecase

  console.log(personName.replace(/\b\w/g,(char) => char .toUpperCase()));
