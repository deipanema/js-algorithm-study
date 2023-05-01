// 최대한 많은 종류
// 배열 길이 / 2 마리

function solution(nums) {
    const pokemon = [...new Set(nums)].length;
    const length = Math.floor(nums.length / 2);
    return pokemon < length ? pokemon : length
    
    
}