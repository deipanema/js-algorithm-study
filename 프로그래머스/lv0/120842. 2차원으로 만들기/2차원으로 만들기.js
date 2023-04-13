function solution(num_list, n) {
    let i = 0
    const arr = [];

     while(num_list.length){
         arr.push(num_list.splice(0, n))
         i += n;
     }
    
    return arr;
}