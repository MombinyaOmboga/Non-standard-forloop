function oddIndices(arr) {
    // Return an array containing all the odd indices in the array
    // Your code here
    for(i=0; i<arr.length; i+=2){
        return arr[i];
    }
}

function oddReverse(arr) {
    // Return an array containing all the odd indices starting from the end
    // Your code herer
    result = []
    for(i = arr.length -1; i >=0; i-=2){
        result.push(arr[i]);
    }
    return arr[i]

}

function secondPower(arr) {
    // Return an array containing all indices that are powers of 2
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        if (Math.log2(i+1) % 1 === 0) {
            res.push(i);
        }
    }
    return res;
}

function nthPower(arr, n) {
    // Return an array containing all indices that are powers of n
    // Your code here
    let res = []
    for (let i = 0; i < arr.length; i++){
        if (Math.log(i + 1) / Math.log(n) % 1 === 0){
            res.push(i);
        }
    }
    return res;
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