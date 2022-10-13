let paramToValidator = {
    name:validateName,
    email:validateEmail,
    username:validateUsername,
    password:validatePassword,
    loginUsername:validUsernameForLogin
}

let emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,3}$/
let namePattern = /^[a-zA-Z]+$/
let usernamePattern = /^[a-zA-Z0-9]{5,10}$/

function validateInput(params){
    let isValid = true
    for (let param in params){
        if(isValid)
            isValid = paramToValidator[param](params[param])
        else
            break;
    }
    return isValid
}   

function validateName(input){
    let trimmedInput = input.trim()
    let words = trimmedInput.split(" ")
    if(words.length!=2){
        return false;
    }
    let [firstName,lastName] = words
    if(firstName.match(namePattern)&&lastName.match(namePattern)){
        return true;
    } 
    else{
        return false;
    }
}

function validateEmail(email){
    if(email.match(emailPattern)){
        return true;
    }
    else{
        return false;
    }
}

function validatePassword(password){
    if(password.length<8){
        return false;
    }
    return true;
}
function validateUsername(username){
    if(username.match(usernamePattern)){
        return true;
    }
    return false;
}
function validUsernameForLogin(username){
    if(username.match(emailPattern)||username.match(usernamePattern)){
        return true;
    }
    return false;
}
module.exports =  {
    validateInput
}