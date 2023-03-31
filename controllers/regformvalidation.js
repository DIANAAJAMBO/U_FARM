// function ValidateNIN(nin){
//     const ninRegex = /^[a-zA-Z0-9]{13}$/;
//     return ninRegex.test(nin);
// }    

const Validate = (event) =>{
    
    let error = 0;

    let fullName = document.getElementById("inputfullname");
    // let telNumber = document.getElementById("contact");
    // let msg = document.getElementById("message");
    // let NIN = document.getElementById("mail");
    // let userName = document.getElementById("username_UserID")

    let fullNameError = document.getElementById("FNErr");
    // let telError = document.getElementById("pnError");
    // let msgError = document.getElementById("message");
    // let mailError = document.getElementById("mailErr");
    // let userNameError = document.getElementById("userNameErr")

    if(fullName.value == ""){
        fullName.style.border = "1px solid red";
        fullNameError.innerHTML = "Please fill in your name";
        fullNameError.style = "color: red; font-size:11px;";
        error++
    }
    else{
        fullNameError.innerHTML =""
    }
    

    // //validating phone number
    // let telregex = /^(?:\+256|0)[2,3,4,7][0-9]{8}$/;
    
    // if (telNumber.value =="") {
    //     telNumber.style.border = "1px solid red";
    //     telError.textContent = "Please fill in your phone number";
    //     telError.style = "color: red; font-size:11px;";
    //     error++
    // }
    // else if (!telNumber.value.match(telregex)) {
    //         telNumber.style.border = "1px solid red";
    //         telError.textContent = "Please fill in correct phone number eg 0706323345";
    //         telError.style = "color: red; font-size:11px;";
    //         error++
    //     } else {
    //         fullNameError.innerHTML =""
    //     }

    // if(msg.value == ""){
    //         msg.style.border = "1px solid red";
    //         msgError.innerHTML = "Please write your message";
    //         msgError.style = "color: red; font-size:11px;";
    //         error++
    // }
    // else{
    //         msgError.innerHTML =""
    //     }



    
    if(error>0){
        event.preventDefault()
    }
    }
