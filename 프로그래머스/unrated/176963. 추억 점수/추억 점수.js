function solution(name, yearning, photo) {
    const answer = [];
    
    for(let i =0; i < photo.length; i++){
        let result = 0;
        for(let j =0; j < photo[i].length; j++){
            if( -1 < name.findIndex(v => v === photo[i][j])){
                result += yearning[name.findIndex(v => v === photo[i][j])]
            }
        }
        answer.push(result);
        
    }
    
    return answer;
    
}


