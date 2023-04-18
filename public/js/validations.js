const Validate = (event) =>{
   
    let error = 0;
     //input variables
    let firstName = document.getElementById("inputfirstname");
    let lastName = document.getElementById("inputlastname");
    let userName = document.getElementById("username");
    let pwd = document.getElementById("password");    
    let NIN = document.getElementById("inputNIN");
    let phoneNumber = document.getElementById("focontact");
    let email = document.getElementById("email");  
    let dateOfBirth = document.getElementById("birthdate");
    let male = document.getElementById("male");
    let female = document.getElementById("female");  
    let address1 = document.getElementById("inputAddress");    
    let address2 = document.getElementById("inputAddress2");    
    let ward = document.getElementById("inputward");    
    let yearsLivedInWard = document.getElementById("years-lived");    
    let foNumber = document.getElementById("inputFOnumber");
    let doR = document.getElementById("registrationDate");    
    let option1 = document.getElementById("option1");    
    let option2 = document.getElementById("option2");    
    let option3 = document.getElementById("option3");    
       
       
    
     //input error variables
    let firstNameError = document.getElementById("FNError");
    let lastNameError = document.getElementById("LNError");
    let userNameError = document.getElementById("userNameErr");
    let ninError = document.getElementById("NINErr");
    let pwdError = document.getElementById("pwdErr");
    let phoneNumberError = document.getElementById("phoneNoErr");
    let emailError = document.getElementById("emailErr");
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
        return false
    }
    else if(firstName.value.length <5 ){
        firstName.style.border = "1px solid red";
        firstNameError.innerHTML = "first name should be more than 5 characters";
        firstNameError.style ="color: red; font-size:11px;";
        return false
    }
    else if(firstName.value.length >50 ){
        firstName.style.border = "1px solid red";
        firstNameError.innerHTML = "first name should be less than 50 characters";
        firstNameError.style ="color: red; font-size:11px;";
        return false
    }
    else{
        firstName.style.border = "1px solid green";
        firstNameError.innerHTML = ""; 
    }
    
    //validating last name
    if(lastName.value == ""){
        lastName.style.border = "1px solid red";
        lastNameError.innerHTML = "Please fill in the last name";;
        lastNameError.style = "color: red; font-size:11px;";
        return false
    }
    else if(lastName.value.length <5 ){
        lastName.style.border = "1px solid red";
        lastNameError.innerHTML = "last name should be more than 5 characters";
        lastNameError.style ="color: red; font-size:11px;";
        return false
    }
    else if(lastName.value.length >50 ){
        lastName.style.border = "1px solid red";
        lastNameError.innerHTML = "last name should be less than 50 characters";
        lastNameError.style ="color: red; font-size:11px;";
        return false
    }
    else{
        lastName.style.border = "1px solid green";
        lastNameError.innerHTML = "";
       
    }

     //validating username
     const userNameRegex = /^[a-zA-Z0-9]+$/;
    if(userName.value == ""){
        userName.style.border = "1px solid red";
        userNameError.innerHTML = "Please fill in your username";
        userNameError.style = "color: red; font-size:11px;";
        return false
    }
    else if(!(userName.value.match(userNameRegex))){
        userName.style.border = "1px solid red";
        userNameError.innerHTML = "username should be alphanumeric";
        userNameError.style ="color: red; font-size:11px;";
        return false
    }
    else {
        userName.style.border = "1px solid green";
        userNameError.innerHTML = "";
       
    }

    //validating password
    

    if (pwd.value == "") {
      pwd.style.border = "1px solid red";
      pwdError.textContent = "Password is required";
      pwdError.style = "color: red; font-size:11px;";
      return false
    }
    
    else if (pwd.value.length < 5) {
      pwd.style.border = "1px solid red";
      pwdError.textContent = "Please the password must be atleast 5 characters";
      pwdError.style = "color: red; font-size:11px;";
      return false
    }
    else {
        pwd.style.border = "1px solid green";
        pwdError.textContent = "";
        
      }

    
    //validating NIN
    const NINregex = /^[a-zA-Z0-9]{13}$/;
    
    if(NIN.value == ""){
        NIN.style.border = "1px solid red";
        ninError.innerHTML = "Please fill in your National Identification Number";
        ninError.style = "color: red; font-size:11px;";
        return false
    }
    else if(!NIN.value.match(NINregex)){
        NIN.style.border = "1px solid red";
        ninError.innerHTML = "NIN should be 13 alphanumeric characters";
        ninError.style = "color: red; font-size:11px;";
        return false
    }
    else{
        NIN.style.border = "1px solid green";
        ninError.innerHTML = "";
       
    }

    //validating Phone number   
    let telregex = /^(?:\+256|0)[2,3,4,7][0-9]{8}$/;
    
    if (phoneNumber.value ==""){
        phoneNumber.style.border = "1px solid red";
        phoneNumberError.textContent = "Please fill in your phone number";
        phoneNumberError.style = "color: red; font-size:11px;";
        return false
    }
    else if (!phoneNumber.value.match(telregex)){
        phoneNumber.style.border = "1px solid red";
        phoneNumberError.textContent = "Please fill in correct phone number eg 0706323345 or +256706323345";
        phoneNumberError.style = "color: red; font-size:11px;";
        return false
    }
    else {
        phoneNumber.style.border = "1px solid green";
        phoneNumberError.textContent = "";
       
    }  

    
    //validating email
    const emailregex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email.value == "") {
      email.style.border = "1px solid red"
      emailError.textContent = "Please fill in your email";
      emailError.style = "color: red; font-size:11px;";
      return false

    }else if (!email.value.match(emailregex)) {
      email.style.border = "1px solid red"
      emailError.textContent = "Please insert the correct email address";
      emailError.style = "color: red; font-size:11px;";
      return false
    }
    else {
        email.style.border = "1px solid green"
        emailError.textContent = "";
       
      }


    //validating date of birth
    if (dateOfBirth.value == ""){
        dateOfBirth.style.border = "1px solid red";
        dobError.innerHTML = "Please fill in your date of birth ";
        dobError.style = "color: red; font-size:11px;";
        return false  
    }
    else {
        dateOfBirth.style.border = "1px solid green";
        dobError.innerHTML = " ";
      
    }
    
    //validating gender
    if (!(male.checked || female.checked)){
        genderError.innerHTML = "Please fill in your gender";
        genderError.style = "color: red; font-size:11px;";
        return false  
    }
    else{
        genderError.innerHTML = "";
         
    }        

    //validating directions to your residence
    if (address1.value == ""){
        address1.style.border = "1px solid red";
        address1Error.innerHTML = "Please fill in your residential address";
        address1Error.style = "color: red; font-size:11px;";
        return false
    }
    else{
        address1.style.border = "1px solid green";
        address1Error.innerHTML = "";
       
    }

    //validating Residential type
    if (address2.value ==""){
        address2.style.border = "1px solid red";
        address2Error.innerHTML = "Please fill in the residential type";
        address2Error.style = "color: red; font-size:11px;";
        return false 
    }
    else {
        address2.style.border = "1px solid green";
        address2Error.innerHTML = "";
       
    }

    //validating ward
    if (ward.value ==""){
        ward.style.border = "1px solid red";
        wardError.innerHTML = "Please fill in the ward";
        wardError.style = "color: red; font-size:11px;";
        return false 
    }
    else {
        ward.style.border = "1px solid green";
        wardError.innerHTML = "";
         
    }

    //validating number of years lived in ward
   
    if (yearsLivedInWard.value ==""){
        yearsLivedInWard.style.border = "1px solid red";
        yearsLivedInWardError.innerHTML = "Please fill in the ward";
        yearsLivedInWardError.style = "color: red; font-size:11px;";
        return false 
    }
    else if(yearsLivedInWard.value < 10){
        yearsLivedInWard.style.border = "1px solid red";
        yearsLivedInWardError.innerHTML = "Sorry";
        yearsLivedInWardError.style = "color: red; font-size:11px;";
        return false
    }
    else {
        
        yearsLivedInWardError.innerHTML = "Sorry but you are below required age to register";
       
    }

    //validating fo number   
    let foregex = /^UGFO-[0-9]{3}$/;
    
    if (foNumber.value ===""){
        foNumber.style.border = "1px solid red";
        foNoError.textContent = "Please fill in the unique number";
        foNoError.style = "color: red; font-size:11px;";
        return false
    }
    else if (!foNumber.value.match(foregex)){
        foNumber.style.border = "1px solid red";
        foNoError.textContent = "Please fill in correct fo unique number";
        foNoError.style = "color: red; font-size:11px;";
        return false
    } 
    else {
        foNumber.style.border = "1px solid green";
        foNoError.textContent = "";
        
    } 


    //validating registeration date
    if (doR.value == ""){
        doR.style.border = "1px solid red";
        doRError.innerHTML = "Please fill in your date of registeration ";
        doRError.style = "color: red; font-size:11px;";
        return false 
    }
    else{
        doR.style.border = "1px solid green";
        doRError.innerHTML = "";
       
    }
   
    //validating fo activities
    if (!(option1.checked || option2.checked || option3.checked)){
        foActivitiesErr.innerHTML = "Please fill in atleast one fo activity";
        foActivitiesErr.style = "color: red; font-size:11px;";
        return false 
    }
    
    
     if(error>0){
            event.preventDefault()
        }
}