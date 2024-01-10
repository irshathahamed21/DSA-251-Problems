let array = [2, 5, 11, 9];

let count = 0;

for (let i = 0; i < array.length - 1; i++) {
  if (array[i + 1] < array[i]) { // if any element smaller than its previous element 
    count++;
  }
}

if (count <= 1) {
  console.log(true);
} else {
  console.log(false);
}
