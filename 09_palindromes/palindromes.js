const palindromes = function (str) {
  const cleanedString = str.toLowerCase().replace(/[^\w\s]|_/g, '').replaceAll(' ', '');
  const reversedString = cleanedString.split('').reverse().join('');
  return reversedString === cleanedString;
};

// Do not edit below this line
module.exports = palindromes;
