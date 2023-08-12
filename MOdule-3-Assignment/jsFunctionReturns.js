let findMaxNumber=(arr)=>{
   if(arr.length==0){
    return null
   } else{
    let res=Math.max(...arr)
    return res
   }
}

const numbers1 = [10, 20, 5, 30, 25];


console.log(findMaxNumber(numbers1));