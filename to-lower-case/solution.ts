var toLowerCase = function(str) {
  const buffer = []; // string buffer
  for (let index = 0; index < str.length; index ++) { // var instead of let
    let charCode = str[index].charCodeAt();
    if (64 < charCode && charCode < 91) {
      charCode += 32;
    }
    buffer.push(String.fromCharCode(charCode));
  }
  return buffer.join(''); // join faster then "str1" + "str2"
};
