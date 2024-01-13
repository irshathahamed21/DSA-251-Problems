// pair sum

let arr = [1, 2, 3, 4,5,6]; 
arr.sort()
let target = 7;

let  n = arr.length;


let l = 0;
let r = n -1;
let res = []
while(l < r){
  if(arr[l] + arr[r] === target){
    res.push([arr[l],arr[r]])
    l++
    r--
  }
 
  
  else if(arr[l] + arr[r] < target){
    l++
  }
  else {
    r--
  }

}

console.log(res)
