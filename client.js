//Find the longest word in a string
function findLongestWordLength(str) {
  let longestWord = "";
  let words = str.split(" ");
  console.log(words);
  
  for (let i = 0; i < words.length; i += 1) {
    let individualWord = words[i];
    console.log(individualWord);
    if (individualWord.length > longestWord.length) {
      longestWord = individualWord;
    }
  }

  return longestWord.length;
}

console.log (findLongestWordLength("The adventure begins - They were always beside you - Your nerdy best friends - And the DM to guide you - And they rise from the flames for the battles ahead"));