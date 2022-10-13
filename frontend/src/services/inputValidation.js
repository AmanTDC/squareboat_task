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
        alert("Please enter First Name and Last Name only with only 1 space character in between without any special characters.");
        return false;
    }
    let [firstName,lastName] = words
    if(firstName.match(namePattern)&&lastName.match(namePattern)){
        return true;
    } 
    else{
        alert("Please enter First Name and Last Name only with only 1 space character in between without any special characters.");
        return false;
    }
}

function validateEmail(email){
    if(email.match(emailPattern)){
        return true;
    }
    else{
        alert("Invalid Email Address");
        return false;
    }
}

function validatePassword(password){
    if(password.length<8){
        alert("Password should be greater than 8 characters.")
        return false;
    }
    return true;
}
function validateUsername(username){
    if(username.match(usernamePattern)){
        return true;
    }
    alert("Username should be greater than 5 characters and must contain only alphabets and digits");
    return false;
}
function validUsernameForLogin(username){
    if(username.match(emailPattern)||username.match(usernamePattern)){
        return true;
    }
    alert("Invalid Username Input. Please Enter You Email Id or Username to Login.")
    return false;
}
export {
    validateInput
}