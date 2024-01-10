let array = [2,5,8,9]

let max = 0;
for(let i = 0; i < array.length; i++){
  if(array[i] > max){
    max = array[i]
  }
}
let second = 0;
for(let i = 0; i < array.length; i++){
  if(array[i] > second && array[i] < max){
    second = array[i]
  }
}

console.log(second)
