// 4^3113^234
//1 네오//2 무지//3 튜브//4 어피치//5 카톡개
/*
[
    [0,0,0,0,0],
    [0,0,1,0,3],
    [0,2,5,0,1],
    [4,2,4,4,2],
    [3,5,1,3,1]
]
// [1,5,3,5,1,2,1,4]
*/

function solution(board, moves) {
    moves = moves.map(v => v-1);
    let answer = 0;
    const toys = [];
    
    function pick(toy){
        for(let i=0; i < board.length; i++){
            if(board[i][toy] !== 0){
                if(toys.at(-1) === board[i][toy]) {
                    toys.pop();
                    answer = answer + 2;
                } else {
                    toys.push(board[i][toy]);
                }
                
                board[i][toy] = 0;
                break;
            }
        }
    }
    
    for(const move of moves){
        pick(move);
    }
    
    return answer;
}