let s  = Number("1221")

for(let i = s+1; ;i++){
  if(checkPalindrome(i)){
    console.log(i)
    break
  }
  
}

function checkPalindrome(str){
  str = str.toString()
  let res = ""
  let l = 0;
  let r = str.length-1
  while(l < r){
    if(str[l] !== str[r]){
      return false
    }
    l++
    r--
  }
  return true
}
