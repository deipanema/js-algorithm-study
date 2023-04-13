function solution(before, after) {
    if(before.length !== after.length) return 0;
    const obj = {};
    
    for(const value of before){
        obj[value] = ( obj[value] || 0) + 1;
    }
    
    for(let i = 0; i < after.length; i++){
        if(!obj[after[i]]) return 0;
        obj[after[i]]--;
    }
    
    return 1;
}