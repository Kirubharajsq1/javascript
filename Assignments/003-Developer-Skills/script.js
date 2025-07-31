/*
const temperature = [100, 3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9];

const calcAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i <= temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp != "number") continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max);
  console.log(min);
  return max - min;
};

const amplitude = calcAmplitude(temperature);
console.log(amplitude);

*/

const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celsius",
    value: prompt("Degree Celsius:"),
  };
  const kelvin = Number(measurement.value) + 273;
  return kelvin;
};

console.log(measureKelvin());
