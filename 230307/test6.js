function f_back(str){
    if(str.length>=3){
        const bk = str.substring(str.length-3);
        return bk+str+bk;
    }else{
        return false;
    }
}
console.log(f_back("ab"));
console.log(f_back("안녕하세용"));
console.log(f_back("hungry"));
