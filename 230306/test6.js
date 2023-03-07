function test(x){
    return((Math.abs(100-x)<=20)||(Math.abs(400-x)<=20));
}
console.log(test(10));
console.log(test(80));
console.log(test(90));
console.log(test(390));