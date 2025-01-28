const form = document.getElementById('form');
const firstnameInput = document.getElementById('firstname-input');
const emailInput = document.getElementById('email-input');
const phoneInput = document.getElementById('phone-input');
const passwordInput = document.getElementById('password-input');
const repeatPasswordInput = document.getElementById('repeat-password-input');
const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', function(e) 
{
  e.preventDefault(); 
  var errors = [];
  try 
  {
    if (firstnameInput) 
      {
      errors=validateSignupForm();
    } 
    else 
    {
      errors=validateLoginForm();
    }
    if(errors.length>0) 
      {
      errorMessage.innerText=errors.join('. ');
      errorMessage.style.color='red';
    } 
    else
    {
      errorMessage.innerText='Form submitted successfully!';
      errorMessage.style.color='green';
    }
  }catch (error) 
  {
    errorMessage.innerText='An error occurred: '+error.message;
    errorMessage.style.color='red';
  }
}
);
function validateSignupForm() 
{
  var errors = [];
  if(!firstnameInput.value) 
  {
    errors.push('Firstname is required');
  }
  
  if(!emailInput.value) 
  {
    errors.push('Email is required');
  } 
  else 
  {
    let hasAtSymbol=false;
    let hasDot=false;
    let hasInvalidChar=false;
    const validChars="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789._%+-";
    for (let char of emailInput.value)
    {
      if (char==='@')
      {
        if (hasAtSymbol) 
        {
          hasInvalidChar=true;
        }
        hasAtSymbol=true;
      } 
      else if(char==='.') 
      {
        hasDot=true;
      } 
      else if(!validChars.includes(char)) 
      {
        hasInvalidChar=true;
      }
    }

    if (!hasAtSymbol || !hasDot) {
      errors.push("Invalid email format: Email must contain '@' and '.'");
    }
    if (hasInvalidChar) {
      errors.push("Invalid email format: Email contains invalid characters.");
    }
  }
  const phoneError=validatePhoneNumber(phoneInput.value);
  if (phoneError)
  {
    errors.push(phoneError);
  }
  const passwordError = validatePasswords(passwordInput.value, repeatPasswordInput.value);
  if (passwordError) {
    errors.push(passwordError);
  }

  return errors;
}


function validatePhoneNumber(phoneNumber) 
{
  if(phoneNumber.length!==10) 
  {
    return "Phone number must be 10 digits.";
  }
  return null; 
}
function validatePasswords(password1, password2) 
{
  if(password1!==password2) 
  {
    return "Passwords must match.";
  }
  let hasUpperCase=false;
  let hasLowerCase=false;
  let hasDigit=false;
  let hasSpecialChar=false;
  const specialChars="!@#$%^&*";
  if(password1.length<8) 
  {
    return "Password must be at least 8 characters long.";
  }
  for(let char of password1)
  {
    if(char>='A'&&char<='Z') 
    {
      hasUpperCase=true;
    } 
    else if(char>='a'&&char<='z') 
    {
      hasLowerCase=true;
    } 
    else if(char>='0'&&char<='9') 
    {
      hasDigit=true;
    } 
    else if(specialChars.includes(char)) 
    {
      hasSpecialChar=true;
    }
  }
  if(!hasUpperCase||!hasLowerCase||!hasDigit||!hasSpecialChar) 
  {
    return "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.";
  }

  return null; 
}
function validateLoginForm() 
{
  var errors=[];
  if(!emailInput.value)
  {
    errors.push('Email is required');
  }
  if(!passwordInput.value) 
  {
    errors.push('Password is required');
  }
  return errors;
}

var allInputs=[];
if(firstnameInput) 
{
  allInputs.push(firstnameInput);
}
if(emailInput) 
{
  allInputs.push(emailInput);
}
if(phoneInput) 
{
  allInputs.push(phoneInput);
}
if(passwordInput) 
{
  allInputs.push(passwordInput);
}
if(repeatPasswordInput) 
{
  allInputs.push(repeatPasswordInput);
}
for (var j=0; j<allInputs.length;j++) 
{
  allInputs[j].addEventListener('input',function(){
    errorMessage.innerText = ''; 
  });
}