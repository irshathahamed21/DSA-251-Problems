// find the maximum length subarray whose sum is zero

let arr = [1,-1,2,-2]

let res = []
for(let i = 0; i < arr.length; i++){
  for(let j = i+1; j <= arr.length; j++){
    res.push(arr.slice(i,j))
  }
}
console.log(res)

let max = 0;
for(let rows of res){
  let sum = rows.reduce((ac,el) => ac +el, 0)
  if(sum  == 0){
    max = Math.max(max, rows.length)
  }
}

console.log(max)
