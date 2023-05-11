// 1빵 2야채 3고기
function solution(ingredient) {
    let stack = [];
    let answer = 0;
    for(let x of ingredient){
        stack.push(x);
        
        if(stack.slice(-4).join('') === '1231'){
            stack.splice(-4);
            answer++;
        }
    }
    
    return answer;
}