//majority element that appears more than n/3 times


let arr = [3, 2, 2, 1, 5, 2, 3]

let obj = {}

for(let i = 0; i < arr.length; i++){
  
  obj[arr[i]] = (obj[arr[i]] || 0) + 1
  
}

for(let key in obj){
  if(obj[key] > Math.floor((arr.length/3))){
    console.log(key)
  }
}
