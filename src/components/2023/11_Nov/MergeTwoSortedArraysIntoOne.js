function mergeArrays(arr1, arr2) {
    return Array.from(new Set([...arr1, ...arr2])).sort((a, b) => a - b)
}

console.log(mergeArrays([1, 2, 3, 4], [5, 6, 7, 8]))