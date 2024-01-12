

// make unique elements array and count the elements need to be removed

let array = [ 1, 2, 1, 2]

let set = new Set()
let count = 0;

for(let nos of array){
  if(!set.has(nos)){
      set.add(nos)
  }
  else {
    count++
  }
}

console.log(count)
