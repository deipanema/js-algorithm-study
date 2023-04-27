function solution(d, budget) {
   let result = 0;
    let i = 0;
    
    d.sort((a,b) => a-b)
    
    while(true){
        if(budget < d[i] || i === d.length ) return result;
        
        budget -= d[i];
        result++;
        i++;
    }
    
}