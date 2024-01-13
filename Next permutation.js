// next permutation
let str1 = "silent"
let str2 = "listek"

str1 = str1.split("").sort().join("")
str2 = str2.split("").sort().join("")


if(str1 === str2){
  console.log(true)
}
else {
  console.log(false)
}


