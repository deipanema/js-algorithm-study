// '/dev/stdin'
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
const palins = Array.from({length: n}, (_,idx) => input[idx+1]);

function palindrome(x) {
  return x === x.split('').reverse().join('');
}


for(const str of palins){
  if(palindrome(str)) console.log(0); // 문자열이 회문인 경우
  else {                          // 문자열이 회문이 아닌 경우
    let found = false;
    let n = str.length;  // 문자열의 길이

    for(let i = 0; i < parseInt(n / 2); i++){  // 회문 is 대칭
      if(str[i] !== str[n - i - 1]) { // 대칭이 아닌 인덱스를 찾은 경우
        if(palindrome(str.slice(0, i) + str.slice(i+1, n))) found = true;
        if(palindrome(str.slice(0, n - i - 1) + str.slice(n-i, n))) found = true;
        break;
      }
    }
    if(found) console.log(1); // 유사 회문인 경우
    else console.log(2); // 아무것도 아닌 경우
  }
}
