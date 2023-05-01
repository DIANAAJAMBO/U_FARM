const Validate = (event) => {


    //input variables

    let fName = document.getElementById('signupfirstname');
    let lName = document.getElementById('signuplastname');
    let signupEmail = document.getElementById('signupEmail');
    let Username = document.getElementById('signupUN');
    let password = document.getElementById("signuppassword");
    let contact = document.getElementById("contact");

    //input error variables
    let FirstnameError = document.getElementById('FirstnameErr');
    let LastnameError = document.getElementById('LastnameErr');
    let signupEmailError = document.getElementById('signupEmailErr');
    let signupUNError = document.getElementById('signupUNErr');
    let passwordError = document.getElementById('passwordErr');
    let contactError = document.getElementById('contactErr');


    //validating first name
    if (fName.value == "") {
        fName.style.border = "1px solid red";
        FirstnameError.innerHTML = "Please fill in your first name";
        FirstnameError.style = "color: red; font-size:11px;";
        return false
    }
    else if (fName.value.length < 5) {
        fName.style.border = "1px solid red";
        FirstnameError.innerHTML = "first name should be more than 5 characters";
        FirstnameError.style = "color: red; font-size:11px;";
        return false
    }
    else if (fName.value.length > 50) {
        fName.style.border = "1px solid red";
        FirstnameError.innerHTML = "first name should be less than 50 characters";
        FirstnameError.style = "color: red; font-size:11px;";
        return false
    }
    else {
        fName.style.border = "1px solid green";
        FirstnameError.innerHTML = "";
    }

    //validating last name
    if (lName.value == "") {
        lName.style.border = "1px solid red";
        LastnameError.innerHTML = "Please fill in the last name";;
        LastnameError.style = "color: red; font-size:11px;";
        return false
    }
    else if (fName.value.length < 5) {
        lName.style.border = "1px solid red";
        LastnameError.innerHTML = "last name should be more than 5 characters";
        LastnameError.style = "color: red; font-size:11px;";
        return false
    }
    else if (lName.value.length > 50) {
        lName.style.border = "1px solid red";
        LastnameError.innerHTML = "last name should be less than 50 characters";
        LastnameError.style = "color: red; font-size:11px;";
        return false
    }
    else {
        lName.style.border = "1px solid green";
        LastnameError.innerHTML = "";

    }

    //validating username
    const usernameRegex = /^[a-zA-Z0-9]+$/;
    if (Username.value == "") {
        Username.style.border = "1px solid red";
        signupUNError.innerHTML = "Please fill in your username";
        signupUNError.style = "color: red; font-size:11px;";
        return false
    }
    else if (!(Username.value.match(usernameRegex))) {
        Username.style.border = "1px solid red";
        signupUNError.innerHTML = "username should be alphanumeric";
        signupUNError.style = "color: red; font-size:11px;";
        return false
    }
    else {
        Username.style.border = "1px solid green";
        signupUNError.innerHTML = "";

    }

    //validating password


    if (password.value == "") {
        password.style.border = "1px solid red";
        passwordError.textContent = "Password is required";
        passwordError.style = "color: red; font-size:11px;";
        return false
    }

    else if (password.value.length < 5) {
        password.style.border = "1px solid red";
        passwordError.textContent = "Please the password must be atleast 5 characters";
        passwordError.style = "color: red; font-size:11px;";
        return false
    }
    else {
        password.style.border = "1px solid green";
        passwordError.textContent = "";

    }


    //validating email
    const signupemailregex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (signupEmail.value == "") {
        signupEmail.style.border = "1px solid red"
        signupEmailError.textContent = "Please fill in your email";
        signupEmailError.style = "color: red; font-size:11px;";
        return false
        
    } else if (!signupEmail.value.match(signupemailregex)) {
        signupEmail.style.border = "1px solid red"
        signupEmailError.textContent = "Please insert the correct email address";
        signupEmailError.style = "color: red; font-size:11px;";
        return false
    }
    else {
        signupEmail.style.border = "1px solid green"
        signupEmailError.textContent = "";

    }

    //validating Phone number   
    let contactregex = /^(?:\+256|0)[2,3,4,7][0-9]{8}$/;

    if (contact.value == "") {
        contact.style.border = "1px solid red";
        contactError.textContent = "Please fill in your phone number";
        contactError.style = "color: red; font-size:11px;";
        return false
    }
    else if (!ufphoneNumber.value.match(contactregex)) {
        contact.style.border = "1px solid red";
        contactError.textContent = "Please fill in correct phone number eg 0706323345 or +256706323345";
        contactError.style = "color: red; font-size:11px;";
        return false
    }
    else {
        contact.style.border = "1px solid green";
        contactError.textContent = "";

    }
}
