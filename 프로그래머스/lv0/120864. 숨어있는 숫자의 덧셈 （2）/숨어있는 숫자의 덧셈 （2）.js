function solution(my_string) {
    return my_string.replace(/[a-zA-z]/g," ").split(" ").map(Number).reduce((a,b) => a+b, 0)
}