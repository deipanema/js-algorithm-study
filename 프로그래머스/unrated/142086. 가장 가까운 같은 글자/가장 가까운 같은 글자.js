function solution(s) {
    const seen = new Map();
    const result = [];
    
    for(let i = 0; i < s.length; i++){
        if(seen.has(s[i])){
            result.push(i - seen.get((s[i])))
        } else {
            result.push(-1);            
        }
        seen.set(s[i], i);
    }
    
    return result;
    
}