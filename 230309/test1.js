/*function max_fo_three(x,y,z){
    const arr = [x,y,z];
    let v = -Infinity;
    for(let i = 0; i<arr.length; i++){
        if(v<arr[i]){
            v=arr[i];
        }    
    }
    return v;
}*/

function max_fo_three(x,y,z){
    return Math.max(x,y,z)
}
console.log(max_fo_three(20,50,90));