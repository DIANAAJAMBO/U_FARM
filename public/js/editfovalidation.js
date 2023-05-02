const Validate = (event) => {
 
    //input variables
    let ephoneNumber = document.getElementById("efocontact");
    let eward = document.getElementById("eward");
    let eoption1 = document.getElementById("eoption1");
    let eoption2 = document.getElementById("eoption2");
    let eoption3 = document.getElementById("eoption3");
    
    //input error variables
    let ephoneNumberError = document.getElementById("ephoneNoErr");
    let ewardError = document.getElementById("ewardErr");
    let efoActivitiesErr = document.getElementById("efoactiviesErr");


    //validating Phone number   
    let telregex = /^(?:\+256|0)[2,3,4,7][0-9]{8}$/;

    if (ephoneNumber.value == "") {
        ephoneNumber.style.border = "1px solid red";
        ephoneNumberError.textContent = "Please fill in your phone number";
        ephoneNumberError.style = "color: red; font-size:11px;";
        return false
    }
    else if (!ephoneNumber.value.match(telregex)) {
        ephoneNumber.style.border = "1px solid red";
        ephoneNumberError.textContent = "Please fill in correct phone number eg 0706323345 or +256706323345";
        ephoneNumberError.style = "color: red; font-size:11px;";
        return false
    }
    else {
        ephoneNumber.style.border = "1px solid green";
        ephoneNumberError.textContent = "";

    }

    //validating ward
    if (eward.value == "") {
        eward.style.border = "1px solid red";
        ewardError.innerHTML = "Please fill in the ward";
        ewardError.style = "color: red; font-size:11px;";
        return false
    }
    else {
        eward.style.border = "1px solid green";
        ewardError.innerHTML = "";

    }

    //validating fo activities
    if (!(eoption1.checked || eoption2.checked || eoption3.checked)) {
        efoActivitiesErr.innerHTML = "Please fill in atleast one fo activity";
        efoActivitiesErr.style = "color: red; font-size:11px;";
        return false
    }
   
}