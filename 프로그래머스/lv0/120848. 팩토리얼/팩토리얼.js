function solution(n) {
    let i = 2;
    
    const dp = [0, 1]
    
    while(true){
        dp[i] = dp[i-1] * i;
        
        if(dp[i-1] <= n && n <= dp[i]){
            return n === dp[i]? i : i-1;
        }
        
        i++;
    }
}