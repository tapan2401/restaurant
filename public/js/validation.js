signup.addEventListener("submit", (e) => {
  //e.preventDefault();
  if (validateForm()) console.log("OK");
  else console.log("NO");
});

function validateForm() {
  if (
    checkName() &&
    checkEmail() &&
    checkUsername() &&
    checkPhone() &&
    checkPassword()
  ) {
    return true;
  } else return false;
}

function checkName() {
  let fname = document.getElementById("fname").value;
  if (fname == "") {
    alert("Name can not be empty.\nPlease enter name.");
    return false;
  } else {
    let flag = false;
    for (let i = 0; i < fname.length; i++) {
      if (!isNaN(fname[i])) {
        alert("Name can not have numbers.\nEnter your name again.");
        return false;
      }
    }
  }
  return true;
}

function checkEmail() {
  let mail = document.getElementById("email").value;
  if (mail == "") {
    alert("Email field is empty");
    return false;
  }
  let atPosition = mail.indexOf("@");
  let dotPosition = mail.lastIndexOf(".");
  if (
    atPosition < 1 ||
    dotPosition < atPosition + 2 ||
    dotPosition + 2 >= mail.length
  ) {
    alert("Enter valid email.");
    return false;
  } else return true;
}
function checkUsername() {
  let username = document.getElementById("username").value;
  if (username == "") {
    alert("Username can not be empty");
    return false;
  }
  for (let i = 0; i < username.length; i++) {
    if (username[i] == " ") {
      alert("Username can not have space.");
      return false;
    }
  }
  return true;
}
function checkPassword() {
  let password1 = document.getElementById("password").value;
  let password2 = document.getElementById("password2").value;
  if (password1 < 8) {
    alert("Password length must be at least 8 characters.");
    return false;
  } else {
    if (password1 !== password2) {
      alert("Passwords doesn't match.");
      return false;
    } else return true;
  }
}
function checkPhone() {
  let phone = document.getElementById("phone").value;

  if (isNaN(phone)) {
    alert("Enter valid phone number.");
    return false;
  } else return true;
}
module.exports.validate = validateForm;
