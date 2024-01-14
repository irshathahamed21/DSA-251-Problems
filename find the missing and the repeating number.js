

// find the missing and the repeating number.

let array = [6, 4, 3, 5, 5, 1]
array.sort((a,b) => a-b)
let missing;
let double;
for(let i = 0; i < array.length; i++){
 if(!array.includes(i+1)){
   missing = i+1
 }
 if(array[i] === array[i-1]){
   double = array[i]
 }
}

console.log(missing, double)
