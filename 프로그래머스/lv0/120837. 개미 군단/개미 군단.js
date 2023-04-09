// 장군 5
// 병정 3
// 일 1
// 23: 장군 4 병정 1
function solution(hp) {
    let answer = 0;
    
    answer = parseInt(hp / 5);
    hp = hp % 5;
     
    answer += parseInt(hp / 3);
    hp = hp % 3;
    
    answer += parseInt(hp / 1);
    hp = hp % 1;
    
    return answer;
}