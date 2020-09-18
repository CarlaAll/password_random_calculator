const resultElement = document.getElementById("result");
const lengthElement = document.getElementById("length");
const uppercaseElement =  document.getElementById("uppercase");
const lowercaseElement = document.getElementById("lowercase");
const numbersElement =  document.getElementById("numbers");
const symbolsElement =  document.getElementById("symbols");
const generateElement =  document.getElementById("generate");
const ClipboardElement =  document.getElementById("Clipboard");

const randomFunction = {
              lower: getRandomLower, 
              upper: getRandomUpper, 
              number: getRandomNumber, 
              symbol: getRandomSymbol,
            }

  generateElement.addEventListener(`Click`, () => {
    const length = lengthElement.value; 
   const hasLower = lowercaseElement.checked; 
   const hasUpper = uppercaseElement.checked; 
   const hasNumber = numbersElement.checked;
  const hasSymbol = symbolsElement.checked; 
  resultElement.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
    });

 //clipboard
ClipboardElement.addEventListener(`Click`, () => {
  const textarea = document.createElement(`textarea`);  
  const password = resultElement.innerText; 

  if(!password){
    return;
  }

  textarea.value = password;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand(`copy`);
  textarea.remove();
  alert(`Password copied to clipboard`);
}) ;
//generatePassword 

function generatePassword(lower, upper, number,symbol, length) {
  let generatedPassword = ``; 
  
  const typesCount = lower + upper + number + symbol; 
  
  const typeArray = [{ lower }, { upper }, { number }, { symbol }];
  (item => Object.values(item)[0]); 

  if (typesCount === 0) 
      { return ``; };

  for (let i = 0; i <length; i += typesCount) {
    typesArray.forEach(type => {
      const funcName = Object.key(type)[0];

      generatedPassword += randomFunction [funcName]();
    })
  }
  const finalPassword = generatedPassword.slice(0, length);

  return finalPassword
}

function
  getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) +
      97);
} 

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
} 

function
  getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.round * 10) +
      48);
} 

function getRandomSymbol() {
  const symbols = `!@#$%^&*(){}[]=<>/,.`;
  return symbols[Math.floor(Math.random * symbols.length)];
}
