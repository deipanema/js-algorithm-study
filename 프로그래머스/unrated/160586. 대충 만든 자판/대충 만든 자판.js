// for문 돌면서 map에 인덱스를 넣는다.
// 인덱스가 있던 것보다 작으면 바꿔넣는다.


function solution(keymap, targets) {
    let answer = Array.from({length: targets.length}, () => 0);
    
    const map = new Map();
    
    for(let i = 0; i < keymap.length; i++){
        keymap[i] = [...keymap[i]];
        
        for(let j =0; j < keymap[i].length; j++){
            if(map.has(keymap[i][j]) && map.get(keymap[i][j]) > j+1 ){    
                map.set(keymap[i][j], j+1);
            }
            
            if( !map.has(keymap[i][j]) ){
                map.set(keymap[i][j], j+1);    
            } 
        }
        
    }
    
     for(let i = 0; i < targets.length; i++){
        targets[i] = [...targets[i]];
        
        for(let j =0; j < targets[i].length; j++){
            if(map.has(targets[i][j])) answer[i] += map.get(targets[i][j]);
            else {
                answer[i] = 0;
                break;
            }
        }
     }
    
    return answer.map( v => v === 0 ? -1 : v)
}



