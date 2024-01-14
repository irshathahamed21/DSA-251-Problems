// longest consective sequence

 let array = [9,5,4,9,10,10,6]
 
 array.sort((a,b) => a-b)
 let currentCount = 1;
 let maxCount = 0;
 for(let i = 0; i < array.length; i++){
   if(array[i+1]-array[i] === 1){
     currentCount++
   } 
   else {
     currentCount = 1
   }
   maxCount = Math.max(maxCount, currentCount)
 }
 
 console.log(maxCount)
