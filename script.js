// const digits = [2, 4, 6, 5];

// let result = 0;

// digits.map((el, index) => {
//   result += el * Math.pow(10, index);
// });

// console.log(result);

// const final = digits.reduce((acc, curr, index) => {
//   const value = curr * Math.pow(10, index);
//   return acc + value;
// });

// console.log(final);

// const num2 = [7, 3, 2];

// let num2Result = 7 * 1 + 3 * 10 + 2 * 100;
// console.log(num2Result);

// function digitsToNumber(digit) {
//   const result = digit.reduce((acc, curr, index) => {
//     return (acc += curr * Math.pow(10, index));
//   });

//   return result;
// }

// console.log(digitsToNumber([2, 4, 6, 5]));

//*************************************************************************************************

//Split numbers into Digits

// function numbersIntoDigits(value) {
//   let result = [];
//   let num = value;

//   while (num / 10 > 0) {
//     let numb = num % 10;
//     result.unshift(numb);

//     num = Math.floor(num / 10);
//   }

//   return result;
// }

// console.log(numbersIntoDigits(12345));

// let num = 12345;

// const resultArray = [];

// while (num / 10 > 0) {
//   const remainder = num % 10;
//   resultArray.unshift(remainder);

//   num = Math.floor(num / 10);
// }

// console.log(resultArray);

// function numberIntoDigit(value) {
//   let num = value;

//   const digitArray = [];
//   while (num >= 1) {
//     const remainder = num % 10;
//     digitArray.unshift(remainder);

//     num = Math.floor(num / 10);
//   }

//   return digitArray;
// }

// console.log(numberIntoDigit(98765430021));

//*************************************************************************************************

// Reverse a number

// function reverseNumber(value) {
//   let num = value;
//   let result = [];

//   while (num > 0) {
//     const remainder = num % 10;
//     result.push(remainder);
//     num = Math.floor(num / 10);
//   }

//   return +result.join("");
// }

// console.log(reverseNumber(1234));

// function reverseNumber(value) {
//   let num = value;
//   const result = [];

//   while (num > 0) {
//     const remainder = num % 10;
//     result.unshift(remainder);

//     num = Math.floor(num / 10);
//   }

//   const reversed = result.reduce((acc, el, index) => {
//     return (acc += el * Math.pow(10, index));
//   }, 0);

//   return reversed;
// }

// console.log(reverseNumber(98756));

// function reverseNumber(value) {
//   let number = value;
//   const result = [];

//   while (number > 0) {
//     const remainder = number % 10;
//     result.unshift(remainder);
//     number = Math.floor(number / 10);
//   }

//   let totalSum = 0;

//   result.map((el, index) => (totalSum += el * 10 ** index));

//   return totalSum;
// }

// console.log(reverseNumber(1234));

//*************************************************************************************************

// Remove the decimal point Mathematically

// function removeDecimalPoint(num) {
//   let value = num;

//   while (!Number.isInteger(value)) {
//     value = value * 10;
//   }

//   return value;
// }

// console.log(removeDecimalPoint(12.34));

// function removeDecimalPoint(num) {
//   while (num !== Math.floor(num)) {
//     num = num * 10;
//   }

//   return num;
// }

// console.log(removeDecimalPoint(12.34));

//*************************************************************************************************

// Separate Whole and Fraction Part of the Number

// function separator(value) {
//   let wholeNumber;
//   let fractionalPart;

//   const partA = Math.trunc(value);
//   wholeNumber = partA;

//   const partB = value - partA;
//   fractionalPart = partB;

//   return `Whole ${partA} and Fraction ${partB}`;
// }

// console.log(separator(5.75));

// function separator(value) {
//   const fractionalPart = Number((value % 1).toFixed(10));
//   const wholeNumber = value - fractionalPart;

//   return `Whole ${wholeNumber} and Fraction ${fractionalPart}`;
// }

// console.log(separator(5.3));

//*************************************************************************************************

// Generate a decimal number from whole and fractional digits

// const Whole = [1, 2];
// const Fraction = [3, 4];
// // Output = 12.34

// function decimalNumber(whole, fractional) {
//   const WH = whole.reduce((acc, el, index) => {
//     return (acc += el * Math.pow(10, index));
//   }, 0);

//   const reversedWH = Number(String(WH).split("").reverse().join(""));

//   const FR = fractional.reduce((acc, el, index) => {
//     return (acc += el * Math.pow(10, index));
//   }, 0);

//   const reversedFR = Number(String(FR).split("").reverse().join(""));

//   return Number(`${reversedWH}.${reversedFR}`);
// }

// console.log(decimalNumber(Whole, Fraction));

// function decimalNumberGenerator(whole, fraction) {
//   let wholeNumber = 0;
//   let fractionNumber = 0;

//   for (let i = 0; i < whole.length; i++) {
//     wholeNumber += whole[i] * Math.pow(10, whole.length - i - 1);
//   }

//   for (let i = 0; i < fraction.length; i++) {
//     fractionNumber += fraction[i] * Math.pow(10, -(i + 1));
//   }

//   return wholeNumber + fractionNumber;
// }

// console.log(decimalNumberGenerator([1, 2, 5], [3, 4]));

// function generateDecimalNumberFromWholeAndFractionalDigits(whole, fraction) {
//   const wholeNumber = whole.reduce((acc, element, index) => {
//     return (acc += element * Math.pow(10, whole.length - index - 1));
//   }, 0);

//   console.log(wholeNumber);

//   const fractionNumber = fraction.reduce((acc, element, index) => {
//     return (acc += element * Math.pow(10, -(index + 1)));
//   }, 0);

//   console.log(fractionNumber);
// }

// console.log(generateDecimalNumberFromWholeAndFractionalDigits([1, 2], [3, 4]));

//*************************************************************************************************

// Check if a Number is a Palindrome

// function isPalindrome(input) {
//   const value = input.toString().split("");

//   let result = 0;
//   for (let i = 0; i < value.length; i++) {
//     result += Number(value[i]) * Math.pow(10, i);
//   }

//   return input === result;
// }

// console.log(isPalindrome(11211));

// function isPalindrome(num) {
//   let originalNumber = num;
//   const digit = [];

//   while (originalNumber > 0) {
//     const remainder = originalNumber % 10;
//     digit.push(remainder);
//     originalNumber = Math.floor(originalNumber / 10);
//   }

//   let result = 0;
//   for (let i = 0; i < digit.length; i++) {
//     result += digit[i] * Math.pow(10, digit.length - i - 1);
//   }

//   return num === result;
// }

// console.log(isPalindrome(112211));

//*************************************************************************************************

// Check if a Number is a ArmStrong Number

// function isArmStrong(num) {
//   const originalNumber = num;
//   const digit = [];

//   while (num > 0) {
//     digit.push(num % 10);
//     num = Math.floor(num / 10);
//   }

//   let result = 0;
//   for (let i = 0; i < digit.length; i++) {
//     result += digit[i] ** digit.length;
//   }

//   return originalNumber === result;
// }

// console.log(isArmStrong(407));

//*************************************************************************************************

// HomeWork

// Find the sum of the Numbers

// function findTheSumOfNumbers(num) {
//   const digits = [];
//   while (num > 0) {
//     digits.push(num % 10);
//     num = Math.floor(num / 10);
//   }
//   const result = digits.reduce((acc, curr, index) => acc + curr);
//   return result;
// }

// console.log(findTheSumOfNumbers(987));

// function findTheSumOfNumbers(num) {
//   const digits = [];
//   while (num > 0) {
//     digits.push(num % 10);
//     num = Math.floor(num / 10);
//   }
//   let result = 0;

//   for (let i = 0; i < digits.length; i++) {
//     result += digits[i];
//   }

//   return result;
// }

// console.log(findTheSumOfNumbers(987));

//*************************************************************************************************

//Find the Average of the digits

function findTheAverageOfDigits(num) {
  const digits = [];

  while (num > 0) {
    digits.push(num % 10);
    num = Math.floor(num / 10);
  }

  let result = 0;
  for (let i = 0; i < digits.length; i++) {
    result += digits[i];
  }

  return result / digits.length;
}

console.log(findTheAverageOfDigits(4567));
