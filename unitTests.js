export function capitalize(word) {
  const firstLetter = word.charAt(0).toUpperCase(); // extracts the first letter of a string and capitalizes it
  const capitalizedWord = firstLetter + word.slice(1); // adds the extracted first letter and the rest of the text together
  return capitalizedWord; // return the capitilized word
}

export function reverseString(string) {
  const arrayOfString = string.split(""); //splits the string into an array
  const reverseArray = arrayOfString.reverse(); //reverses the array
  return reverseArray.join(""); //
}

export const calculator = {
  add: (a, b) => {
    return a + b;
  },

  subtract: (a, b) => {
    return a - b;
  },

  multiply: (a, b) => {
    return a * b;
  },

  divide: (a, b) => {
    return a / b;
  },
};

export function ceaserCipher(string, shift) {
  //take in user string and for each character move it by a user specified amount.
  //grab the string and turn it into an array
  let characters = string.split(""); //splitting the string into an array

  const charCodes = (array) => {
    for (let i = 0; i < array.length; i++) {
      if (/[a-z]/.test(array[i]) && /[a-z]/.test(array[i] + shift) >= 122) {
        array[i] = array[i].charCodeAt(0) - (122 + 97);
      } //this changes the elements into ASCII characters and then shifts them by the shift argument if the characters is lowercase
      else if (/[A-Z]/.test(array[i]) && /[A-Z]/.test(array[i] + shift) >= 90) {
        array[i] = array[i].charCodeAt(0) - (90 + 65);
      } //this changes the elements into ASCII characters and then shifts them by the shift argument if the characters is uppercase
      else if (/[.,!?"';:]/.test(array[i])) {
        array[i] = array[i].charCodeAt(0);
      } //this changes the elements into ASCII characters and then shifts them by the shift argument if the characters is punctuation
      else {
        array[i] = array[i].charCodeAt(0) + shift; // this returns the shifted code of the character if it doesn't meet any of the conditons from above
      }
    }
    return array; //returns the mutated array
  }; //declaring a function that returns the charcodes of the entered in string.

  const newString = (charCodes) => {
    for (let i = 0; i < charCodes.length; i++) {
      charCodes[i] = String.fromCharCode(charCodes[i]);
    }
    return charCodes.join(""); //returns the joined array
  }; //declaring a function that returns the string version of the shifted charCode

  let shiftedCharCodes = charCodes(characters); //storing the shifted characters in a variable

  let charCodeString = newString(shiftedCharCodes); //storing the shifted string into a variable

  return charCodeString;
}

ceaserCipher("abc", 2);
