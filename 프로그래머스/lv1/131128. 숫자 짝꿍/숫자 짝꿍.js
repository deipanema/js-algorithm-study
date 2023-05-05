function solution(X, Y) {
    const obj_X = {};
    let answer = [];

    for(const o of X){
        obj_X[o] = (obj_X[o] || 0) + 1;
    }

    for(const v of Y){
        if(obj_X[v]){
            answer.push(v);
            obj_X[v]--;
        }
    }

    return !answer.length ? "-1" : Number(answer.join('')) === 0 ? "0" : answer.sort((a,b) => b-a).join("");
}