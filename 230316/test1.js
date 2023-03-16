function reverse_str(str){
    str += "";
    return str.split("").reverse().join();
    
}

console.log(reverse_str("안녕하세염"));
console.log(reverse_str("놀아주기 너무 힘드라"));
