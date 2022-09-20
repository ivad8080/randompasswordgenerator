function getRandomCharacters(letters, numbers, symbols) {
  symbols = checkmarkSymbol ? symbols : [];
  numbers = checkmarkNumber ? numbers : [];
  letters.concat(numbers, symbols);
  return letters[randomThings(letters.length)];
}

function getRandomPassword() {
  let randomPassword = "";
  for (i=0; i<Number(passwordLength); i++) {
    randomPassword += getRandomCharacters(charactersLetters, charactersNumbers, charactersSymbols);
  }
  return randomPassword;
}

const characters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z', '0','1', '2', '3', '4', '5', '6', '7', '8', '9','~','`','!','@','#','$','%','^','&','*','(',')','_','-','+','=','{','[','}',']',',','|',':',';','<','>','.','?','/',
];
let charactersLetters = characters.slice(0, 51);
let charactersNumbers = characters.slice(52, 61);
let charactersSymbols = characters.slice(62, 90);
let charactersLettersNumbers = charactersLetters.concat(charactersNumbers);
let charactersLettersSymbols = charactersLetters.concat(charactersSymbols);

let generateButton = document.querySelector('.generate-button');
let resetButton = document.querySelector('.reset-button');
let checkmarkSymbol = true;
let checkmarkSymbolEl = document.querySelector('#checkmark-symbol');
let checkmarkNumber = true;
let checkmarkNumberEl = document.querySelector('#checkmark-number');
let passwordLength = 10;
let passwordLengthEl = document.querySelector('#password-length');
let inputOne = document.querySelector('.input-one');
let inputTwo = document.querySelector('.input-two');

function randomThings(i) {
  return Math.floor(Math.random() * i);
}

function getRandomCharacters() {
  let randomLetter = '';
  if (checkmarkSymbol && checkmarkNumber) {
    randomLetter = characters[randomThings(characters.length)];
  } else if (checkmarkSymbol && !checkmarkNumber) {
    randomLetter = charactersLettersSymbols[randomThings(charactersLettersSymbols.length)];
  } else if (!checkmarkSymbol && checkmarkNumber) {
    randomLetter = charactersLettersNumbers[randomThings(charactersLettersNumbers.length)];
  } else {
    randomLetter = charactersLetters[randomThings(charactersLetters.length)];
  }
  return randomLetter;
}

function getRandomPassword() {
  let randomPassword = "";
  for (i=0; i<Number(passwordLength); i++) {
    randomPassword += getRandomCharacters();
  }
  return randomPassword;
}

function generatePassword() {
  inputOne.value = getRandomPassword();
  inputTwo.value = getRandomPassword();
}

function resetPassword() {
  inputOne.value = '';
  inputTwo.value = '';
}

function getPasswordLength() {
  passwordLength = passwordLengthEl.value;
  return passwordLength;
}

function getCheckmarkSymbol() {
  checkmarkSymbol = checkmarkSymbolEl.checked;
}

function getCheckmarkNumber() {
  checkmarkNumber = checkmarkNumberEl.checked;
}

checkmarkNumberEl.addEventListener('change', getCheckmarkNumber);
checkmarkSymbolEl.addEventListener('change', getCheckmarkSymbol);
passwordLengthEl.addEventListener('change', getPasswordLength);
generateButton.addEventListener('click', generatePassword);
resetButton.addEventListener('click', resetPassword);

// console.log(characters[0]); // A
// console.log(characters[51]); // z
// console.log(characters[52]); // 0
// console.log(characters[61]); // 9
// console.log(characters[62]); // ~
// console.log(characters[90]); // /