function handleLoginError(error){
    let statusCode = error.response.status
    let errorMessageForUser = null;

    switch(statusCode){
        case 401 : errorMessageForUser = "Invalid User Credentials. Please Retry."; break;
    }

    return {
        error:true,
        errorMessageForUser
    }

}

export {
    handleLoginError
}