let array = [[7, 19, 3],
[4, 21, 0]]

// if an element is zero make its column and row to zeroes



for(let i= 0; i < array.length; i++){
  for(let j = 0; j < array[0].length; j++){
    if(array[i][j] == 0){
     for(let x = 0; x < array.length; x++){
       array[i][x] = 0
       array[x][j] = 0
     }
    }
  }
}
console.log(array)

// finally i got the logic by myself
