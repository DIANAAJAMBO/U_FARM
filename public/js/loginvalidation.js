const Validate = (event) => {


  //input variables

  let username_userID = document.getElementById("username_UserID");
  let Password = document.getElementById("Password");

  //input error variables
  let userNameIDError = document.getElementById("userNameIDErr");
  let PasswordError = document.getElementById('PasswordErr');


  //validating username

  if (username_userID.value == "") {
    username_userID.style.border = "1px solid red";
    userNameIDError.innerHTML = "Please fill in your username";
    userNameIDError.style = "color: red; font-size:11px;";
    return false
  }

  //validating password


  if (Password.value == "") {
    Password.style.border = "1px solid red";
    PasswordError.textContent = "Password is required";
    PasswordError.style = "color: red; font-size:11px;";
    return false
  }

}

