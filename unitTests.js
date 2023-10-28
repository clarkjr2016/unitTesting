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

export function analyzeArray(array) {
  let object = {
    average: null,
    min: null,
    max: null,
    length: null,
  };

  const averageCalculation = (input) => {
    const sum = input.reduce((total, currentValue) => {
      return total + currentValue;
    }, 0); // this is a function expression to return a sum value for the numbers listed in an inputed array;

    const average = Math.ceil(sum / input.length);
    object.average = average;
  }; //changes the average property of the object to the average of the entered in array

  const minCalculation = (input) => {
    let minNumber = Math.min(...input);
    object.min = minNumber;
  };

  const maxCalculation = (input) => {
    let maxNumber = Math.max(...input);
    object.max = maxNumber;
  };

  const lengthOfArray = (input) => {
    let length = input.length;
    object.length = length;
  };

  averageCalculation(array); // actually changes the average property
  minCalculation(array); // actually changes the min property
  maxCalculation(array); //actually changes the max property
  lengthOfArray(array);
  console.log(object);
}

analyzeArray([2, 5, 6]);
