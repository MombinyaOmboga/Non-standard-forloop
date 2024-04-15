function secondPower(arr) {
    var result = [];
    for (var k = 0; k < arr.length; k++) {
        if (isPower(k)) { result.push(arr[k]); }
    }
    return result;
}

//... this function checks if there is only one 1 on the binary number
function isPower(k) {
    var found = false;
    while (k > 0) {
        if (k & 1 == 1) {
            if (found) { return false; }
            found = true;
        }
        k >>= 1;
    }
    return found;
}

// Example usage:
console.log(secondPower([1, 2, 3, 4, 5, 6, 7, 8, 9, 10,16,32]));