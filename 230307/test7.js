function home (x){
// //     if(x.includes(3,"java")){
// //         return true;
// //     }else{
// //         return false;
// //     }
// // }
//     if(x.length<4){
//         return false;
//     }
//     const front = x.substring(0,4);
//     if (front=='java'){
//         return true;
//     }else {
//         return false
//     }
    const front = str.indexOf("java");
    if (front ==0){
        return true;
    }else{
        return false;
    }
  }

const str = "차명진은 바보다".search("바보");
console.log(str);
const first = "차명진은 바보다".indexOf("바보");
console.log(first);

