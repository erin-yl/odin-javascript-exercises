const repeatString = function(word, times) {
  let str = '';
  if (times < 0) {
    return 'ERROR';
  }
  while (times > 0) {
    str += word;
    times --;
  }
    return str;
  }

// Do not edit below this line
module.exports = repeatString;
