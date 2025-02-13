const convertToCelsius = function(cel) {
  const fah = (cel - 32) * 5/9;
  return Math.round(fah * 10) / 10;
};

const convertToFahrenheit = function(fah) {
  const cel = fah * 9/5 + 32;
  return Math.round(cel * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
