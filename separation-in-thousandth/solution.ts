 function solution1(money) {
  if (money === '' ) return '';
  // 多出的最高位
  const len = money.length;
  const extra = len % 3;
  const strBuffer = []; // array 拼接字符串效率更高

  if ( extra > 0 ) { // 非整齐最高位
    strBuffer.push( money.substring( 0, extra ) );
  }

  for ( let i = extra; i < len; i += 3 ) {
    strBuffer.push( money.substring( i, i + 3 ) );
  }

  // strBuffer should be [1, 293, 213]
  return strBuffer.join(',');
}

function solution2(money) {
  if (money === '' ) return '';
  // 多出的最高位
  const len = money.length;
  const extra = len % 3;
  const strBuffer = []; // array 拼接字符串效率更高
  const regexp = /\d{3}/g;

  if ( extra > 0 ) { // 非整齐最高位
    strBuffer.push( money.substring( 0, extra ) );
  }

  regexp.lastIndex = extra;

  let matchStr;
  while( ( matchStr = regexp.exec( money ) ) !== null ) {
    strBuffer.push( matchStr[0] )
  }

  return strBuffer.join( ',' );
}

function solution3(money) {
 if (money === '' ) return '';
 // 多出的最高位
 const len = money.length;
 const strBuffer = []; // array 拼接字符串效率更高

 let start;
 let length = 3;
 for ( let i = money.length; i > 0; i -= 3 ) {
   if(i - 3 < 0 ) {
     start = 0;
     length = i;
   } else {
     start = i - 3;
   }
   strBuffer.unshift( money.substr(start, length) );
 }

 // for ( let i = len; i > 0; i -= 3 ) {
 //   // const start = i - 3 > 0 ? i - 3 : 0;
 //   strBuffer.unshift( money.substring( i - 3, i) );
 // }

 return strBuffer.join(',');
}

function solution4(money) {
  return money.split('')
    .reverse()
    .join('')
    .split(/(\d{3})/g)
    .filter(Boolean) // 过滤掉空串
    .map(
      substr => substr.split('').reverse().join('')
    ).reverse().join(',');
}

function solution5(money) {
  return money.replace(/(?=(\B\d{3})+$)/g, ',');
}

module.exports = {
  solution1,
  solution2,
  solution3,
  solution4,
  solution5,
}
