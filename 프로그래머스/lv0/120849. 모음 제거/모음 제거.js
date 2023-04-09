function solution(my_string) {
    let answer = '';
    for(const char of my_string){
        if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') continue;
        answer += char;   
    }
    
    
    return answer;
}