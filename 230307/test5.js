function test5(x){
    if(x%3==0 || x%7==0){
        return true;
    }else{
        return false;
    }
}

console.log(test5(21));
console.log(test5(11));
console.log(test5(18));