// 종류, 양, 순서 같음
// 칼로리가 적은 순서 1(3), 2(4), 3(6), 0(물)
// 안쪽에서 부터 들어가면 좋겠당
// 몫 만큼 양 옆에 배치하고
// repeat 사용
function solution(food) {
    let answer = '0';
    food = food.slice(1).map(String);
    
    
    while(food.length){
        const n = Math.floor(food[food.length-1] / 2);
        answer = (food.length + "").repeat(n)+`${answer}`+(food.length + "").repeat(n);
        food.pop();
    }
    
    return answer;
}