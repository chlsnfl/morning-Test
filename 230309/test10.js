// const listSearch = (arr, item)=>{
function listSearch(arr, item){
    for(let i=0; i<arr.length; i++){
        if(arr[i]===item){
            return i
        }
    }
    return -1;
}

const nums = [1,2,3,4,5,6,7,8,9];

console.log(listSearch(nums,8));