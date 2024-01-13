// move all - numbers to the beginning of the array

let array = [1, 2, -3, 4, -4, -5]
let pos = []
let neg = []
for(let  i = 0; i < array.length; i++){
  if(array[i] >= 0){
    pos.push(array[i])
  }
  else {
    neg.push(array[i])
  }
 
}

console.log([...neg, ...pos])
