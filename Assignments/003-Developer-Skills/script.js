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

/*
const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celsius",
    value: 10,
  };
  const kelvin = Number(measurement.value) + 273;
  return kelvin;
};

console.log(measureKelvin());

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

//Coding Challenge#1

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  let str = "";
  for (let i = 0; i <= arr.length - 1; i++) {
    str += `...${arr[i]}°C in ${i + 1} days`;
  }
  str += `...`;
  return str;
};

console.log(printForecast(data1));
console.log(printForecast(data2));

//Coding Challenge#2

const hours = [7.5, 8, 6.5, 0, 8.5, 4, 0];

//1. Total hours
//2. Average daily hours
//3. The day with the most hours worked
//4. Number of days worked
//5. Whether the week was full-time(worked 35 hours or more)

const calcHours = function (hours) {
  let totalHours = 0;
  let averageDailyHours = 0;
  let maxDayHours = hours[0];
  let numberOfDaysWorked = 0;
  for (let i = 0; i <= hours.length - 1; i++) {
    totalHours += hours[i];
    if (maxDayHours < hours[i]) maxDayHours = hours[i];
    if (hours[i] != 0) numberOfDaysWorked += 1;
  }
  averageDailyHours = totalHours / hours.length;
  let fullTimeWorked = totalHours >= 35 ? true : false;
  return {
    totalHours: totalHours,
    averageDailyHours: averageDailyHours,
    maxDayHours: maxDayHours,
    numberOfDaysWorked: numberOfDaysWorked,
    fullTimeWorked: fullTimeWorked,
  };
};

console.log(calcHours(hours));

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(bills, tips);

const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
