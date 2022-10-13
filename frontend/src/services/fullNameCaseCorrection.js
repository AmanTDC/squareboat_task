function fullNameCaseCorrected(name){
    let [firstName,lastName] = name.split(" ")
    let newFirstName = firstName[0].toUpperCase()+firstName.slice(1).toLowerCase()
    let newLastName = lastName[0].toUpperCase()+lastName.slice(1).toLowerCase()
    return newFirstName+" "+newLastName
 }

 export{
     fullNameCaseCorrected
 }