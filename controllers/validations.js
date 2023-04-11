const Validate = (event) =>{
   
    let error = 0;
     //input variables
    let firstName = document.getElementById("inputfirstname");
    let lastName = document.getElementById("inputlastname");
    let NIN = document.getElementById("inputNIN");
    let phoneNumber = document.getElementById("focontact");
    let dateOfBirth = document.getElementById("birthdate");
    let address1 = document.getElementById("inputAddress");    
    let address2 = document.getElementById("inputAddress2");    
    let ward = document.getElementById("inputward");    
    let yearsLivedInWard = document.getElementById("years-lived");    
    let foNumber = document.getElementById("inputFOnumber");
    let male = document.getElementById("male");
    let female = document.getElementById("female");    
    let doR = document.getElementById("registrationDate");    
    let option1 = document.getElementById("option1");    
    let option2 = document.getElementById("option2");    
    let option3 = document.getElementById("option3");    
      

     //input error variables
    let firstNameError = document.getElementById("FNError");
    let lastNameError = document.getElementById("LNError");
    let ninError = document.getElementById("NINError");
    let phoneNumberError = document.getElementById("phoneNoError");
    let dobError = document.getElementById("dobErr");
    let genderError = document.getElementById("genderErr");
    let address1Error = document.getElementById("address1Err");
    let address2Error = document.getElementById("address2Err");
    let wardError = document.getElementById("wardErr");
    let yearsLivedInWardError = document.getElementById("yearslivedinwardErr");
    let foNoError = document.getElementById("foNoErr");
    let doRError = document.getElementById("doRErr");
    let foActivitiesErr = document.getElementById("foactiviesErr");
    
    //validating first name
    if(firstName.value == ""){
        firstName.style.border = "1px solid red";
        firstNameError.innerHTML = "Please fill in your first name";
        firstNameError.style = "color: red; font-size:11px;";
        error++
    }
    else if(firstName.value.length >5 && firstName.value.length <50 ){
        firstName.style.border = "1px solid red";
        firstNameError.innerHTML = "Please first name should be between 5 to 50 characters";
        firstNameError.style ="color: red; font-size:11px;";
        error++
    }
    
    //validating last last name
    if(lastName.value == ""){
        lastName.style.border = "1px solid red";
        lastNameError.innerHTML = "Please fill in your last name";
        lastNameError.style = "color: red; font-size:11px;";
        error++
    }
    else if(firstName.value.length >5 && firstName.value.length <50 ){
        lastName.style.border = "1px solid red";
        lastNameError.innerHTML = "Please last name should be between 5 to 50 characters";
        lastNameError.style ="color: red; font-size:11px;";
        error++
    }
    
    //validating NIN
    const NINregex = /^[a-zA-Z0-9]{13}$/;
    
    if(NIN.value == ""){
        NIN.style.border = "1px solid red";
        ninError.innerHTML = "Please fill in your National Identification Number";
        ninError.style = "color: red; font-size:11px;";
        error++
    }
    else if(!NIN.value.match(NINregex)){
        NIN.style.border = "1px solid red";
        ninError.innerHTML = "NIN should be 13 characters";
        ninError.style = "color: red; font-size:11px;";
        error++
    }

    //validating Phone number   
    let telregex = /^(?:\+256|0)[2,3,4,7][0-9]{8}$/;
    
    if (phoneNumber.value ==""){
        phoneNumber.style.border = "1px solid red";
        phoneNumberError.textContent = "Please fill in your phone number";
        phoneNumberError.style = "color: red; font-size:11px;";
        error++
    }
    else if (!phoneNumber.value.match(telregex)){
        phoneNumber.style.border = "1px solid red";
        phoneNumberError.textContent = "Please fill in correct phone number eg 0706323345 or +256706323345";
        phoneNumberError.style = "color: red; font-size:11px;";
        error++
    } 

    //validating date of birth
    if (dateOfBirth.value == ""){
        dateOfBirth.style.border = "1px solid red";
        dobError.innerHTML = "Please fill in your date of birth ";
        dobError.style = "color: red; font-size:11px;";
        error++  
    }
    
    //validating gender
    if (!(male.checked || female.checked)){
        genderError.innerHTML = "Please fill in your gender";
        genderError.style = "color: red; font-size:11px;";
        error++  
    }    

    //validating directions to your residence
    if (address1.value == ""){
        address1.style.border = "1px solid red";
        address1Error.innerHTML = "Please fill in your residential address";
        address1Error.style = "color: red; font-size:11px;";
        error++  
    }

    //validating Residential type
    if (address2.value ==""){
        address2.style.border = "1px solid red";
        address2Error.innerHTML = "Please fill in the residential type";
        address2Error.style = "color: red; font-size:11px;";
        error++  
    }

    //validating ward
    if (ward.value ==""){
        ward.style.border = "1px solid red";
        wardError.innerHTML = "Please fill in the ward";
        wardError.style = "color: red; font-size:11px;";
        error++  
    }

    //validating number of years lived in ward
   
    if (yearsLivedInWard.value ==""){
        yearsLivedInWard.style.border = "1px solid red";
        yearsLivedInWardError.innerHTML = "Please fill in the ward";
        yearsLivedInWardError.style = "color: red; font-size:11px;";
        error++  
    }
    // else if(yearsLivedInWard.value>10){
    //     yearsLivedInWard.style.border = "1px solid red";
    //     yearsLivedInWardError.innerHTML = "Sorry";
    //     yearsLivedInWardError.style = "color: red; font-size:11px;";
    //     error++  

    // }

    //validating fo number   
    let foregex = /^UGFO-[0-9]{3}$/;
    
    if (foNumber.value ===""){
        foNumber.style.border = "1px solid red";
        foNoError.textContent = "Please fill in the unique number";
        foNoError.style = "color: red; font-size:11px;";
        error++
    }
    else if (!foNumber.value.match(foregex)){
        foNumber.style.border = "1px solid red";
        foNoError.textContent = "Please fill in correct fo unique number";
        foNoError.style = "color: red; font-size:11px;";
        error++
    } 


    //validating registeration date
    if (doR.value == ""){
        doR.style.border = "1px solid red";
        doRError.innerHTML = "Please fill in your date of registeration ";
        doRError.style = "color: red; font-size:11px;";
        error++  
    }
   
    //validating fo activities
    if (!(option1.checked || option2.checked || option3.checked)){
        foActivitiesErr.innerHTML = "Please fill in atleast one fo activity";
        foActivitiesErr.style = "color: red; font-size:11px;";
        error++  
    }    

     if(error>0){
            event.preventDefault()
        }
}