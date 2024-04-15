function oddIndices(arr) {
    // Return an array containing all the odd indices in the array
    // Your code here
    odd = []
    for(i=0; i<arr.length; i++){
        if (i % 2 !== 0){
            odd.push(arr[i]);
        }
    }
    return odd;
}

function oddReverse(arr) {
    // Return an array containing all the odd indices starting from the end
    // Your code here
    result = []
    for(i = arr.length -1; i >=0; i--){
        if(i%2 != 0){
            result.push(arr[i]);
        }
    }
    return result
}


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

function nthPower(arr, n) {
    // Handle empty array case
    if (arr.length === 0) {
      return [];
    }
  
    // Initialize result array
    const result = [];
  
    // Loop through each index
    for (let i = 0; i < arr.length; i++) {
      // Check if the absolute value of the element is a perfect nth root using Math.pow
      const isPerfectPower = Math.abs(arr[i]) === Math.pow(Math.abs(arr[i]), 1 / n);
      // If it's a perfect nth power, add the index to the result
      if (isPerfectPower) {
        result.push(i);
      }
    }
  
    // Return the array of indices
    return result;
}
  

function firstHalf(arr) {
    // Return an array containing the first half of an array
    // Include middle index on odd length arr
    // Your code here
    let mid = Math.floor(arr.length/2);

    if(arr.length % 2 !== 0){
        return arr.slice(0,mid+1)
    }else {
        return arr.slice(0, mid)
    }
}

function secondHalf(arr) {
    // Return an array containing the second half of an array
    // Exclude middle index on odd length arr
    // Your code here
    let mid = Math.floor(arr.length/2);

    if(arr.length % 2 !== 0){
        return arr.slice(mid+1, arr.length)
    }else {
        return arr.slice(mid, arr.length)
    }
}

module.exports = {
    oddIndices,
    oddReverse,
    secondPower,
    nthPower,
    firstHalf,
    secondHalf
}