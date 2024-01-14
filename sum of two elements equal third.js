// sum of two elements equal third

let arr = [10, 5, 5, 6, 2]
arr.sort((a,b) => a -b)
let res = []


for(let i = 0; i < arr.length; i++){
  for(let j = i+1; j < arr.length; j++){
    for(let k = j+1; k < arr.length; k++){
      if(arr[i] + arr[j] == arr[k]){
        res.push([arr[i], arr[j], arr[k]])
      }
    }
  }
}


console.log(res)




