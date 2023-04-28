function solution(a, b, n) {
    let answer = 0;
    let keep = 0;
    
    while(a <= n){
       if(n % a) {
           keep = (n % a);
           n -= keep;
       }
       
        n = (n / a) * b ;
        answer += n;
        n = keep + n;
        keep = 0;
    
    }
    
    return answer;
}
