// for 돌아서 그 안에서 callings의 동일 값 찾아라.
// 그 값의 앞과 뒤를 변경 swap 배열 구조 분해

function solution(players, callings) {
    const map = new Map();
    
    for(let i = 0; i < players.length; i++){
        map.set(players[i], i);
    }
    
    for(let i = 0; i < callings.length; i++){
        const player = map.get(callings[i]);
        const frontPlayer = players[player - 1];
        
        [players[player], players[player-1]] = [players[player-1], players[player]];

        map.set(callings[i], map.get(callings[i]) - 1);
        map.set(frontPlayer, map.get(callings[i]) + 1);
    }
    return players;
}
