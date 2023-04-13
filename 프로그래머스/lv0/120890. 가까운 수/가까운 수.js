function solution(array, n) {
    array.sort((a,b) => a-b);
    let min = Math.abs(n - array[0]);
    let answer = array[0];
    
    for(let i = 1; i < array.length; i++){
        if(min === Math.abs(n - array[i])) continue;
        
        min = Math.min(min, Math.abs(n - array[i]));
        if(min === Math.abs(n-array[i]) ) answer = array[i];
    }
    
    return answer;
}