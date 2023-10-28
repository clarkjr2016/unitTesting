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
  const characters = string.split("");

  const charCodes = function (array) {
    for (let i = 0; i < array.length; i++) {
      array[i] = array[i].charCodeAt(0) + 1; //this changes the elements into ASCII characters and then shifts them by 1
    }
    return array;
  }; //
}

ceaserCipher("abc");
