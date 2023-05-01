// ' ' & '#' = '#' = 1
// ' ' & ' ' = ' ' = 0
// '#' & '#' = '#' = 1

function solution(n, arr1, arr2) {
    const answer = [];
    
    for(let i =0; i < n; i++){
        answer.push((arr1[i] | arr2[i]).toString(2));
        if(n != answer[i].length) answer[i] = '0'.repeat(n - answer[i].length) + answer[i];
    }
    
    let point = 0;
    let result = Array.from({length: n}, () => '');
    
    for(let i=0; i < n; i++){
        
        function helper(num){
            if(num.length == 0) return;
            if(num[0] == 0) result[i] += ' ';
            else result[i] += '#';
            helper(num.slice(1));
        }
        
        helper(answer[i]);
    }

     return result;
}
