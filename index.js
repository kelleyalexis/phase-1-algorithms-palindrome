function isPalindrome(word) {
  const str = word
  return str === str.split('').reverse().join('');
  }
  
  console.log(isPalindrome("racecar")); // Output: true
  console.log(isPalindrome("hello"));   // Output: false
  
/* 
  create a function that returns true if a word is a palindrome
  takes in a word as a argument 
  if the word === word in reverse
  return true
  else false
*/

/*
  the function takes in a word
  str.split splits the word into characters
  then reverses the letters with str.reverse
  then str.join puts the letters back together in reverse order
  if the word === wordReversed
  return true 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  
  console.log("Expecting: true");
  console.log("=>", isPalindrome("12321"));
  
  console.log("Expecting: false");
  console.log("=>", isPalindrome("motto"));
  
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
