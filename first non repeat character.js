// first non repeat character

let str = "aDcadhc"


let obj = {}

for(let i = 0; i < str.length; i++){
  obj[str[i]] = (obj[str[i]] || 0) + 1
}

for(let key in obj){
  if(obj[key] === 1){
    console.log(key)
    break
  }
}
