/**
 * 自顶向下的方法
 * @param priceList 钢铁价格数组
 * @param steelLength 钢条长度
 */
export function memo_cut_rod(priceList: number[], steelLength: number) {
  function cut_rod(priceList: number[], steelLength: number): number {
    if(typeof maxCutingPrice[steelLength] !== 'undefined') 
      return maxCutingPrice[steelLength];

    if( steelLength === 0) return 0;

    let price = -Infinity;
    for ( let priceIdx: number = 0; priceIdx < steelLength; priceIdx ++ ) {
      price = Math.max(
        price,
        priceList[priceIdx] + cut_rod(priceList, steelLength - priceIdx - 1)
      );
    }
    maxCutingPrice[steelLength] = price;
    return price;
  }

  const maxCutingPrice: number[] = [];
  const totalPrice: number[] = [];
  
  // 当钢铁长度超过价格列表的长度
  if (steelLength > priceList.length) {
    const times = steelLength / priceList.length;
    console.log(Number.isInteger(times), times);
    if (Number.isInteger(times)) {
      return cut_rod(priceList, priceList.length) * times
    } else {
      return cut_rod(priceList, priceList.length) * (times | 0)
        + cut_rod(priceList, steelLength - priceList.length * (times| 0));
    }
  }
  return cut_rod(priceList, steelLength);
}
