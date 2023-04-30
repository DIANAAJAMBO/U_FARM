const Validate = (event) =>{
   
    let error = 0;
     //input variables
    let uffirstName = document.getElementById("inputuffirstname");
    let uflastName = document.getElementById("inputuflastname");
    let ufuserName = document.getElementById("ufusername");
    let ufpwd = document.getElementById("ufpassword");    
    let ufNIN = document.getElementById("ufinputNIN");
    let ufphoneNumber = document.getElementById("ufcontact");
    let ufemail = document.getElementById("ufemail");  
    let ufdateOfBirth = document.getElementById("ufbirthdate");
    let ufmale = document.getElementById("ufmale");
    let uffemale = document.getElementById("uffemale");    
    let ufward = document.getElementById("ufinputward");      
    let ufNumber = document.getElementById("inputUFnumber");
    let ufdoR = document.getElementById("ufregistrationDate");    
    let ufoption1 = document.getElementById("ufoption1");    
    let ufoption2 = document.getElementById("ufoption2");    
    let ufoption3 = document.getElementById("ufoption3");    
       
       
    
     //input error variables
    let uffirstNameError = document.getElementById("ufFNError");
    let uflastNameError = document.getElementById("ufLNError");
    let ufuserNameError = document.getElementById("ufuserNameErr");
    let ufninError = document.getElementById("ufNINErr");
    let ufpwdError = document.getElementById("ufpwdErr");
    let ufphoneNumberError = document.getElementById("ufphoneNoErr");
    let ufemailError = document.getElementById("ufemailErr");
    let ufdobError = document.getElementById("ufdobErr");
    let ufgenderError = document.getElementById("ufgenderErr");
    let ufwardError = document.getElementById("ufwardErr");
    let ufNoError = document.getElementById("ufNoErr");
    let ufdoRError = document.getElementById("ufdoRErr");
    let ufActivitiesErr = document.getElementById("ufactiviesErr");
   
    
    //validating first name
    if(uffirstName.value == ""){
        uffirstName.style.border = "1px solid red";
        uffirstNameError.innerHTML = "Please fill in your first name";
        uffirstNameError.style = "color: red; font-size:11px;";
        return false
    }
    else if(uffirstName.value.length <5 ){
        uffirstName.style.border = "1px solid red";
        uffirstNameError.innerHTML = "first name should be more than 5 characters";
        uffirstNameError.style ="color: red; font-size:11px;";
        return false
    }
    else if(uffirstName.value.length >50 ){
        uffirstName.style.border = "1px solid red";
        uffirstNameError.innerHTML = "first name should be less than 50 characters";
        uffirstNameError.style ="color: red; font-size:11px;";
        return false
    }
    else{
        uffirstName.style.border = "1px solid green";
        uffirstNameError.innerHTML = ""; 
    }
    
    //validating last name
    if(uflastName.value == ""){
        uflastName.style.border = "1px solid red";
        uflastNameError.innerHTML = "Please fill in the last name";;
        uflastNameError.style = "color: red; font-size:11px;";
        return false
    }
    else if(uflastName.value.length <5 ){
        uflastName.style.border = "1px solid red";
        uflastNameError.innerHTML = "last name should be more than 5 characters";
        uflastNameError.style ="color: red; font-size:11px;";
        return false
    }
    else if(uflastName.value.length >50 ){
        uflastName.style.border = "1px solid red";
        uflastNameError.innerHTML = "last name should be less than 50 characters";
        uflastNameError.style ="color: red; font-size:11px;";
        return false
    }
    else{
        uflastName.style.border = "1px solid green";
        uflastNameError.innerHTML = "";
       
    }

     //validating username
     const ufuserNameRegex = /^[a-zA-Z0-9]+$/;
    if(ufuserName.value == ""){
        ufuserName.style.border = "1px solid red";
        ufuserNameError.innerHTML = "Please fill in your username";
        ufuserNameError.style = "color: red; font-size:11px;";
        return false
    }
    else if(!(ufuserName.value.match(ufuserNameRegex))){
        ufuserName.style.border = "1px solid red";
        ufuserNameError.innerHTML = "username should be alphanumeric";
        ufuserNameError.style ="color: red; font-size:11px;";
        return false
    }
    else {
        ufuserName.style.border = "1px solid green";
        ufuserNameError.innerHTML = "";
       
    }

    //validating password
    

    if (ufpwd.value == "") {
      ufpwd.style.border = "1px solid red";
      ufpwdError.textContent = "Password is required";
      ufpwdError.style = "color: red; font-size:11px;";
      return false
    }
    
    else if (ufpwd.value.length < 5) {
      ufpwd.style.border = "1px solid red";
      ufpwdError.textContent = "Please the password must be atleast 5 characters";
      ufpwdError.style = "color: red; font-size:11px;";
      return false
    }
    else {
        ufpwd.style.border = "1px solid green";
        ufpwdError.textContent = "";
        
      }

    
    //validating NIN
    const ufNINregex = /^[a-zA-Z0-9]{13}$/;
    
    if(ufNIN.value == ""){
        ufNIN.style.border = "1px solid red";
        ufninError.innerHTML = "Please fill in your National Identification Number";
        ufninError.style = "color: red; font-size:11px;";
        return false
    }
    else if(!ufNIN.value.match(ufNINregex)){
        ufNIN.style.border = "1px solid red";
        ufninError.innerHTML = "ufNIN should be 13 alphanumeric characters";
        ufninError.style = "color: red; font-size:11px;";
        return false
    }
    else{
        ufNIN.style.border = "1px solid green";
        ufninError.innerHTML = "";
       
    }

    //validating Phone number   
    let uftelregex = /^(?:\+256|0)[2,3,4,7][0-9]{8}$/;
    
    if (ufphoneNumber.value ==""){
        ufphoneNumber.style.border = "1px solid red";
        ufphoneNumberError.textContent = "Please fill in your phone number";
        ufphoneNumberError.style = "color: red; font-size:11px;";
        return false
    }
    else if (!ufphoneNumber.value.match(uftelregex)){
        ufphoneNumber.style.border = "1px solid red";
        ufphoneNumberError.textContent = "Please fill in correct phone number eg 0706323345 or +256706323345";
        ufphoneNumberError.style = "color: red; font-size:11px;";
        return false
    }
    else {
        ufphoneNumber.style.border = "1px solid green";
        ufphoneNumberError.textContent = "";
       
    }  

    
    //validating email
    const ufemailregex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (ufemail.value == "") {
      ufemail.style.border = "1px solid red"
      ufemailError.textContent = "Please fill in your email";
      ufemailError.style = "color: red; font-size:11px;";
      return false

    }else if (!ufemail.value.match(ufemailregex)) {
      ufemail.style.border = "1px solid red"
      ufemailError.textContent = "Please insert the correct email address";
      ufemailError.style = "color: red; font-size:11px;";
      return false
    }
    else {
        ufemail.style.border = "1px solid green"
        ufemailError.textContent = "";
       
      }


    //validating date of birth
    if (ufdateOfBirth.value == ""){
        ufdateOfBirth.style.border = "1px solid red";
        ufdobError.innerHTML = "Please fill in your date of birth ";
        ufdobError.style = "color: red; font-size:11px;";
        return false  
    }
    else {
        ufdateOfBirth.style.border = "1px solid green";
        ufdobError.innerHTML = " ";
      
    }
    
    //validating gender
    if (!(ufmale.checked || uffemale.checked)){
        ufgenderError.innerHTML = "Please fill in your gender";
        ufgenderError.style = "color: red; font-size:11px;";
        return false  
    }
    else{
        ufgenderError.innerHTML = "";
         
    }        

    //validating ward
    if (ufward.value ==""){
        ufward.style.border = "1px solid red";
        ufwardError.innerHTML = "Please fill in the ward";
        ufwardError.style = "color: red; font-size:11px;";
        return false 
    }
    else {
        ufward.style.border = "1px solid green";
        ufwardError.innerHTML = "";
         
    }

    //validating uf number   
    let ufregex = /^UGUF-[0-9]{3}$/;
    
    if (ufNumber.value ===""){
        ufNumber.style.border = "1px solid red";
        ufNoError.textContent = "Please fill in the unique number";
        ufNoError.style = "color: red; font-size:11px;";
        return false
    }
    else if (!ufNumber.value.match(ufregex)){
        ufNumber.style.border = "1px solid red";
        ufNoError.textContent = "Please fill in correct fo unique number";
        ufNoError.style = "color: red; font-size:11px;";
        return false
    } 
    else {
        ufNumber.style.border = "1px solid green";
        ufNoError.textContent = "";
        
    } 


    //validating registeration date
    if (ufdoR.value == ""){
        ufdoR.style.border = "1px solid red";
        ufdoRError.innerHTML = "Please fill in your date of registeration ";
        ufdoRError.style = "color: red; font-size:11px;";
        return false 
    }
    else{
        ufdoR.style.border = "1px solid green";
        ufdoRError.innerHTML = "";
       
    }
   
    //validating fo activities
    if (!(ufoption1.checked || ufoption2.checked || ufoption3.checked)){
        ufActivitiesErr.innerHTML = "Please fill in atleast one fo activity";
        ufActivitiesErr.style = "color: red; font-size:11px;";
        return false 
    }
    
    
     if(error>0){
            event.preventDefault()
        }
}