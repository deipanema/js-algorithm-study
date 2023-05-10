let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const n = Number(input[0]);
const arr = input[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);
let x = input[2];

let result = 0;
let start = 0;
let end = n - 1;
while (true) {
  while (end > 0 && arr[start] + arr[end] > x) {
    end -= 1;
  }
  if (arr[start] + arr[end] == x) {
    result += 1;
    end -= 1;
  }
  start += 1;
  if (start >= end) break;
}
console.log(result);
