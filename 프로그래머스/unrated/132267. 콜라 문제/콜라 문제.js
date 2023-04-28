function solution(a, b, n) {
    let answer = 0;
    let keep = 0;
//a가 제수(divisor)
//b는 마트가 주는 병
//n이 피제수(dividend)    
// 20 /2 = 10 * b
// 10 /2 = 5
// 5 / 2 = 2
// 2 / 2 = 1
// cnt = 19
    
    while(a < n){
       if(n % a) {
           keep = (n % a);
           n -= keep;
       }
       
        n = (n / a) * b ;
        answer += n;
        n = keep + n;
        keep = 0;
    
    }
    
    return n == a ? answer + ((n / a) * b) : answer
}

