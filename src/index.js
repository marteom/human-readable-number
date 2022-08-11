const values = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
    20: "twenty",
    30: "thirty",
    40: "forty",
    50: "fifty",
    60: "sixty",
    70: "seventy",
    80: "eighty",
    90: "ninety",
    100: "hundred",
}

const getTwoDigit = (arr) => {
    if(parseInt(arr[0]) === 0) {
        return values[parseInt(arr[1])];
    }
    if(parseInt(arr[0]) === 1 || parseInt(arr[1]) === 0) return values[parseInt(arr.join(''))]; 
    return values[parseInt(arr[0].padEnd(2,'0'))] + ' ' + values[parseInt(arr[1])];
}

const getThreeDigitHead = (arr) => {
    return values[parseInt(arr[0])] + ' ' + values[100];
}

module.exports = function toReadable (number) {
  const arrVal = Array.from(String(number));
    
  if(arrVal.length === 1){
    return values[number];
  }
  else if(arrVal.length === 2){
    return getTwoDigit(arrVal);
  }
  else if(arrVal.length === 3){
    if(parseInt(arrVal[1]) === 0 && parseInt(arrVal[2]) === 0) return getThreeDigitHead(arrVal);
    
    const hundreds = getThreeDigitHead(arrVal);
    arrVal.shift();
    return hundreds + ' ' + getTwoDigit(arrVal);
  }
}
