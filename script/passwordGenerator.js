// function generatePassword(
//   length,
//   includeLowerCase,
//   includeUpperCase,
//   includeNumbers,
//   includeSymbols
// ) {
//   const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
//   const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//   const numberChars = "0123456789";
//   const symbolChars = "!@#$%^&*()_+-=";
//   let allowedChars = "";
//   let password = "";
//   allowedChars += includeLowerCase ? lowercaseChars : "";
//   allowedChars += includeUpperCase ? upperCaseChars : "";
//   allowedChars += includeNumbers ? numberChars : "";
//   allowedChars += includeSymbols ? symbolChars : "";
//   if (length <= 0) {
//     return (password lenght must be at least );
//   }
//   if (allowedChars.length === 0) {
//     return ( at least one set of character needs to be selected );
//   }

//   for (let i = 0; i < length; i++) {
//     const randomIndex = Math.floor(Math.random() * allowedChars.length);
//     password += allowedChars[randomIndex];
//   }
//   return password;
// }

// const passwordLength = 12;
// const includeLowerCase = true;
// const includeUpperCase = true;
// const includeNumbers = true;
// const includeSymbols = true;
// const password = generatePassword(
//   passwordLength,
//   includeLowerCase,
//   includeUpperCase,
//   includeNumbers,
//   includeSymbols
// );

// console.log(Generated password is: ${password});

// Password generator function
function generatePassword(
    length = 12,
    includeLowerCase = true,
    includeUpperCase = true,
    includeNumbers = true,
    includeSymbols = true
  ) {
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+-=";
    let allowedChars = "";
    let password = "";
  
    allowedChars += includeLowerCase ? lowercaseChars : "";
    allowedChars += includeUpperCase ? upperCaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? symbolChars : "";
  
    if (allowedChars.length === 0) {
      return "At least one set of characters must be selected.";
    }
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * allowedChars.length);
      password += allowedChars[randomIndex];
    }
    return password;
  }
  
  // Show/Hide Password
  const togglePassword = document.getElementById("togglePassword");
  const passwordInput = document.getElementById("password");
  
  togglePassword.addEventListener("click", function () {
    const type =
      passwordInput.getAttribute("type") === "password" ? "text" : "password";
    passwordInput.setAttribute("type", type);
    this.textContent = type === "password" ? "Show" : "Hide";
  });
  
  // Generate Password Popup
  const generatePasswordText = document.getElementById("generatePassword");
  const popup = document.getElementById("popup");
  const generatedPasswordText = document.getElementById("generatedPassword");
  const closePopup = document.getElementById("closePopup");
  
  generatePasswordText.addEventListener("click", function () {
    const newPassword = generatePassword();
    generatedPasswordText.textContent = newPassword;
    popup.style.display = "flex";
  });
  
  closePopup.addEventListener("click", function () {
    popup.style.display = "none";
  });
 