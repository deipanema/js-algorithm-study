function solution(my_string) {
    return my_string.split("").map(Number).filter(value => !isNaN(value)).reduce((acc, curr) => acc + curr , 0);
}