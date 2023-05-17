function solution(today, terms, privacies) {
    const answer = [];
    const exDates = new Map();
    let [year, month, day] = today.split('.').map(Number);
    const todaySum = (year * 28 * 12) + (month * 28) + day;
    
    for(const term of terms){
        let [kind, period] = term.split(" ");
        exDates.set(kind, +period);
    }
    
    for(let i = 0; i < privacies.length; i++){
        let [period, kind] = privacies[i].split(" ");
        let [year, month, day] = period.split(".").map(Number);
        const exSum = (year * 28 * 12) + ((month + exDates.get(kind)) * 28) + day;
        
         if(exSum <= todaySum) answer.push(i+1);
       
    }
    
    
    return answer;
}