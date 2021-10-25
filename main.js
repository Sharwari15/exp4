/*
    Design a user registration page which will accept following inputs from user:
    Username (max length 20 characters)
    Password (min length 8 characters, one lowercase letter, one uppercase letter and one special character)
    Email (validate email)
    Birth date (validate date)
    City (dropdown with 4 major cities)
    Programming Languages known (checkbox with values C, C++, Java, JavaScript, Python)
*/

////////////////////////////
// inputs
const usernameInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const birthDataInput = document.getElementById("birth-date");
const cityInput = document.getElementById("city");

////////////////////////////
// event listeners
usernameInput.addEventListener("change", (e) => {
  validateForm(e.target.value, "username");
});

emailInput.addEventListener("change", (e) => {
  validateForm(e.target.value, "email");
});

passwordInput.addEventListener("change", (e) => {
  validateForm(e.target.value, "password");
});

birthDataInput.addEventListener("change", (e) => {
  validateForm(e.target.value, "date");
});

cityInput.addEventListener("change", (e) => {
  validateForm(e.target.value, "city");
});

////////////////////////////
// validation function
const validateForm = (value, type) => {
  switch (type) {
    case "username":
      if (value.length < 5 || value.length > 20)
        alert(
          "Your username should be of minimum length 3 and maximum length of 20"
        );
      break;

    case "email":
      if (value.length < 3 || !value.includes("@gmail.com"))
        alert("Please enter a valid email address");
      break;

    case "password":
      const p_pattern = /([a-z]|[A-Z])([A-Z]|[a-z])\d/;
      if (value.length < 8 || !p_pattern.test(value))
        alert(
          "Your password should be of minimum length 8 and should contain the following- One uppercase letter, One lowercase letter, Two numeric digits"
        );
      break;

    case "date":
      if (value.length === 0)
        alert("Not a valid date. Please enter in mm/dd/yyyy format");
      break;

    case "city":
      if (value.length === 0) alert("Please select a city to continue");
      break;
  }
};
////////////////////////////
