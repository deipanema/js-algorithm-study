function solution(price, money, count) {
  let total_price = 0;

  // 1. 전체이용료
  total_price = price * (((1 + count) * count) / 2) - money;     
    // 등차수열 합 공식
    // 1/2 * 개수 * (첫항 + 끝항)

  // 2. 남은돈
  return total_price > 0 ? total_price : 0;

}