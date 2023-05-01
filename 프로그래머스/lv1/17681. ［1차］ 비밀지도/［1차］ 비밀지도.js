// ' ' & '#' = '#' = 1
// ' ' & ' ' = ' ' = 0
// '#' & '#' = '#' = 1

function solution(n, arr1, arr2) {
    const answer = [];
    
    // 2진수 아이템을 갖는 배열로 바꿔주기
    const arr_1 = arr1.map(v => v.toString(2)); 
    const arr_2 = arr2.map(v => v.toString(2));
    
    
    for(let i =0; i < n; i++){
        answer.push((parseInt(arr_1[i],2) | parseInt(arr_2[i],2)).toString(2)+"");
        if(n != answer[i].length) answer[i] = '0'.repeat(n - answer[i].length) + answer[i];
    }
    
    console.log('answer',answer)
    
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
