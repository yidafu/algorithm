/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  const romanNumberMap = {
    1: 'I',
    4: 'IV',
    5: 'V',
    9: 'IX',
    10: 'X',
    40: 'XL',
    50: 'L',
    90: 'XC',
    100: 'C',
    400: 'CD',
    500: 'D',
    900: 'CM',
    1000: 'M',
  }

  const strBuffer = [];
  let curr = num;
  let decimal = 1;
  while(curr > 0) {
    let currDigital = curr % 10;
    curr = curr / 10 | 0;
    let romanDigitalStr;

    if (romanNumberMap[currDigital * decimal]) {
      romanDigitalStr = romanNumberMap[currDigital * decimal];
    } else if (currDigital > 5) {
      romanDigitalStr =  romanNumberMap[decimal * 5] + romanNumberMap[decimal].repeat(currDigital - 5);
    } else {
      romanDigitalStr = romanNumberMap[decimal].repeat(currDigital)
    }

    strBuffer.unshift(romanDigitalStr);
    decimal *= 10;
  }
  return strBuffer.join('');
};
