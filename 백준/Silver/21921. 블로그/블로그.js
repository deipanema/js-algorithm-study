let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const n = Number(input[0].split(" ")[0]);
const x = Number(input[0].split(" ")[1]);
const visitors = input[1].split(" ").map(Number);

let start = 0;
let end = x;
let max = 0;
let cnt = 1;

for(let i = 0; i < end; i++){
  max += visitors[i];
}

let a = max;
while(end <= n){
  a = a - visitors[start] + visitors[end];

  if(max < a){
    max = a;
    cnt = 1;
  } else if(max === a){
    cnt++;
  }
  
  start++;
  end++;
}

if(max ===0 ) console.log("SAD")
else {
  console.log(max);
  console.log(cnt)
}