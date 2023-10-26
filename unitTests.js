export function capitalize(word) {
  const firstLetter = word.charAt(0).toUpperCase(); // extracts the first letter of a string and capitalizes it
  const capitalizedWord = firstLetter + word.slice(1); // adds the extracted first letter and the rest of the text together
  return capitalizedWord; // return the capitilized word
}
