// frequency counter solution
const anagram = (str1, str2) => {
  if (str1 === str2) return false;
  const charFrequency1 = {};
  const charFrequency2 = {};
  for (const char of str1) {
    charFrequency1[char] = (charFrequency1[char] || 0) + 1;
  }
  for (const char of str2) {
    charFrequency2[char] = (charFrequency2[char] || 0) + 1;
  }
  for (const value in charFrequency1) {
    if (!(charFrequency1[value] === charFrequency2[value])) return false;
  }
  return true;
};

console.log(anagram("cat", "atc"));
