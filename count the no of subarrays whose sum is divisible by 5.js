// count the no of subarrays whose sum is divisible by 5

let arr = [5,0,2,3,1]

let sum =0;
let count = 0;
for(let i = 0; i < arr.length; i++){
  sum = 0;
  for(let j = i; j < arr.length; j++){
   sum += arr[j]
    if(sum % 5 == 0){
    count++
  }
  }
 
}
console.log(count)
