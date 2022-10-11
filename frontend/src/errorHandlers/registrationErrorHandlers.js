function handleRegistrationError(error){
    let statusCode = error.response.status
    let errorMessageForUser = null;

    switch(statusCode){
        case 409 : errorMessageForUser = "Either the email or username is duplicate. Please retry with new details."; break;
    }

    return {
        error:true,
        errorMessageForUser
    }

}

export {
    handleRegistrationError
}