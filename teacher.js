// function solution (s){
//     let p_cnt = 0;
//     let y_cnt = 0;
//     for (let i = 0; i<s.length; i++){
//         if(s[i]=='p' || s[i] == 'P'){
//             p_cnt++;
//         }else if(s[i]=='y' || s[i] =='Y'){
//             y_cnt++;
//         }
//     }
//     return p_cnt === y_cnt? true : false;
// }

// console.log(solution("aaa"));

function solution (s){
    return s.toUpperCase().split("p").length === s.toUpperCase().split("y").length;
}

console.log(solution("aaa"));

// function solution(s){
//     let p = s.match(/p/gi);
//     let y = s.match(/p/gi);
//     let pct = (p != null)? p.match : 0;
//     let yct = (y != null)? p.match : 0;

//     return pct == yct? true : false
// }