function solution(sizes) {
    const arr = [];
    for(const values of sizes){
        values[0] > values[1] ? arr.push([values[0], values[1]]) : arr.push([values[1], values[0]])
        //arr.push(values.sort((a,b) => a-b))
    }
    
    let max_0 = -Infinity;
    let max_1 = -Infinity;;
    
    for(const values of arr){
        max_0 = Math.max(max_0, values[0])
        max_1 = Math.max(max_1, values[1])
        
    }
    
    return max_0 * max_1
}