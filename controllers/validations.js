const Validate = (event) =>{
   
    let error = 0;

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
    let foActivitiesErr = document.getElementById("foactiviesErr");    
      


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
    
    //validating first Name
    if(firstName.value == ""){
        firstName.style.border = "1px solid red";
        firstNameError.innerHTML = "Please fill in your first name";
        firstNameError.style = "color: red; font-size:11px;";
        error++
    }
    else if(firstName.value.length >5 || firstName.value.length <50 ){
        firstName.style.border = "1px solid red";
        firstNameError.innerHTML = "Please first name should be between 5 to 50 characters";
        firstNameError.stle ="color: red; font-size:11px;";
    }
    
    //validating last Name
    if(lastName.value == ""){
        lastName.style.border = "1px solid red";
        lastNameError.innerHTML = "Please fill in your last name";
        lastNameError.style = "color: red; font-size:11px;";
        error++
    }
    else if(firstName.value.length >5 || firstName.value.length <50 ){
        lastName.style.border = "1px solid red";
        lastNameError.innerHTML = "Please last name should be between 5 to 50 characters";
        lastNameError.stle ="color: red; font-size:11px;";
    }
    


    // //validating date
    // const regDate = document.getElementById("registrationDate")
    // const today = new Date();      //creating a new instance of date initialised to current date and time
    // const formattedDate = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();       // date format
    // regDate.value = formattedDate;

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


    //     //validating email
    // let emailregex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    // if (email.value == "") {
    //    email.style.border = "1px solid red";
    //    mailError.textContent = "Email is required";
    //    mailError.style = "color: red; font-size:11px;";
    //    error++
    //  }
    //  else if (!email.value.match(emailregex)) {
    //    email.style.border = "1px solid red";
    //    mailError.textContent = "Please put in a correct email address";
    //    mailError.style = "color: red; font-size:11px;";
    //    error++
    //  }
    //  else {
    //    mailError.textContent = "";
    //  }

     if(error>0){
            event.preventDefault()
        }
    }