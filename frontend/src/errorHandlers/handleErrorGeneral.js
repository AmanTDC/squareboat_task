export default function handleErrorGeneral(err){
//console.log(err.response)
    if(err?.response?.status?.status!=401){
        alert(err.response.data.errorMessage);
    }
    else{
        alert("Unexpected Error")
    }
}