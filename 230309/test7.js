function aver (scr){
    let sum = 0;
    for(let i=0; i<scr.length; i++){
        sum += scr[i];
    }   

    // const sum = scr.reduce((arr, arrc, idx)=>{
    //     return arr += arrc;
    // },0)
    const avr = sum/scr.length;
    if(avr>89){
        return "A";
    }else if(avr>79){
        return "B";
    }else if(avr>69){
        return "C";
    }else if(avr>59){
        return "D";
    }else{
        return "F";
    }
}

const stScore = [100, 90, 80, 90.50];
console.log(aver(stScore));