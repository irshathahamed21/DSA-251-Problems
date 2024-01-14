let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let rows = arr.length;
let cols = arr[0].length;

let rotatedArr = [];

for (let i = 0; i < cols; i++) {
    let newRow = [];
    for (let j = rows - 1; j >= 0; j--) {
        newRow.push(arr[j][i]);
    }
    rotatedArr.push(newRow);
}

console.log(rotatedArr);


// better method


let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let rows = arr.length;
let cols = arr[0].length;

let rotatedArr = [];

for (let i = 0; i < cols; i++) {
    let newRow = [];
    for (let j = rows - 1; j >= 0; j--) {
        newRow.push(arr[j][i]);
    }
    rotatedArr.push(newRow);
}

console.log(rotatedArr);
