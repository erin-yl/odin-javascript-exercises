const sumAll = function(min, max) {
  if (!Number.isInteger(min) ||
      !Number.isInteger(max) ||
      min < 0 ||
      max < 0) {
    return 'ERROR';
  } else if (min > max) {
    const num = min;
    min = max;
    max = num;
  }

  let sum = 0;
  for (let i = min; i <= max; i++) {
    sum += i;
  }
  return sum;
}

// Do not edit below this line
module.exports = sumAll;
