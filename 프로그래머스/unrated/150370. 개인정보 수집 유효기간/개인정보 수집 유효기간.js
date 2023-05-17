function solution(today, terms, privacies) {
    const answer = [];
    const limits = [];
    const exDates = new Map();
    
    for(const term of terms){
        let [kind, period] = term.split(" ");
        exDates.set(kind, +period);
    }
    
    for(let i = 0; i < privacies.length; i++){
        let [period, kind] = privacies[i].split(" ");
        let [year, month, day] = period.split(".").map(Number);
        month = month + exDates.get(kind);
        day = day - 1;
        
        
        while(12 < month){
            month = month - 12
            year = year + 1
        }
        
        if(day < 1){
            day = 28 + day;
            month = month - 1;
        }
        
        
        
        month = (month+'').padStart(2, 0);
        day = (day+'').padStart(2, 0);
        
        if(+`${year}${month}${day}` < +today.replaceAll('.','')) answer.push(i+1);
    }
    
    
    return answer;
}