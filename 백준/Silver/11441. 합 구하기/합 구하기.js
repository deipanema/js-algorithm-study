// '/dev/stdin'
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
const n = Number(input[0]);
const a = input[1].split(' ').map(Number);
const m = Number(input[2]);

const arr = Array.from({length: m}, (_, idx) => input[idx+3].split(' ').map(Number));

let intervalSum = 0;
const intervalArr = [0];
for(const value of a){
  intervalSum += value;
  intervalArr.push(intervalSum);
}

let result='';
for(let i = 0 ; i < arr.length; i++){
  result += intervalArr[arr[i][1]] - intervalArr[arr[i][0] - 1] + '\n';
}

console.log(result)