// ["AN", "CF", "MJ", "RT", "NA"]	[5, 3, 2, 7, 5]
function solution(survey, choices) {
    let answer = '';
    const obj = {'R':0, 'T':0, 'C':0, 'F':0, 'J':0, 'M':0, 'A':0, 'N':0};
    const idk = 4;
    
    for(let i =0; i < survey.length; i++){
        const point = choices[i]
        if (point < idk){
            obj[survey[i][0]] += idk-point;
        } else if(idk < point){
            obj[survey[i][1]] += point-idk
        } 
    }
    
    answer += obj['R'] >= obj['T'] ? 'R' : 'T';
    answer += obj['C'] >= obj['F'] ? 'C' : 'F';
    answer += obj['J'] >= obj['M'] ? 'J' : 'M';
    answer += obj['A'] >= obj['N'] ? 'A' : 'N';

    return answer;
}