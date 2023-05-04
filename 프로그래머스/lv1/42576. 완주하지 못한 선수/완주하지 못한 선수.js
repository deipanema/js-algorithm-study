function solution(participant, completion) {
    participant.sort();
    completion.sort();
    
    for(let i = 0; i < participant.length; i++){
        if(participant[i] !==completion[i]) return participant[i];
    }
}

// completion을 obj로 만든다
// participant를 돌면서 completion[key]와 같은지 확인후
// 같다면 completion[key]를 -1 한다.
// 그리고 participatn에는 0으로 바꿔주기
// find에서 0이 아닌 거 찾기!