let array = [[1, 2, 3], [2, 4, 5], [3, 5, 8]];

// Calculate the transpose of the matrix
let res = [];
for (let i = 0; i < array.length; i++) {
    let sub = [];
    for (let j = 0; j < array[0].length; j++) {
        sub.push(array[j][i]);
    }
    res.push(sub);
}

// Function to check matrix symmetry
function checkSymmetry() {
    if (array.length !== res.length || array[0].length !== res[0].length) {
        return false;  // Matrices have different dimensions
    }

    for (let i = 0; i < res.length; i++) {
        for (let j = 0; j < res[0].length; j++) {
            if (array[i][j] !== res[i][j]) {
                return false;  // Matrices are not equal
            }
        }
    }

    return true;  // Matrices are symmetric
}

console.log(checkSymmetry());
