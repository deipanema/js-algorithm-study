function solution(array, commands) {
    const answer = [];
    for(const item of commands){
        const i = item[0]-1;
        const j = item[1];
        const k = item[2]-1;

        answer.push(array.slice(i, j).sort((a,b) => a-b)[k]);
    }
    
    return answer;
}