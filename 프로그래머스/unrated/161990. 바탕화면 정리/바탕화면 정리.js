function solution(wallpaper) {
    let n = Infinity
    let s = -Infinity
    
    let w = Infinity
    let e = -Infinity
    
    for(let i = 0; i < wallpaper.length; i++){
        ww = wallpaper[i].split('');
        for(let j = 0; j < ww.length; j++){
            
            if(ww[j] === '#') {
                if(i < n) {
                    n = i;
                }
                
                if(s < i){
                    s = i;
                }
                
                if(j < w){
                    w = j;
                }
                
                if(e < j){
                    e = j;
                }
            }
        }
    }
    
    return [n,w,s+1,e+1]
    
}