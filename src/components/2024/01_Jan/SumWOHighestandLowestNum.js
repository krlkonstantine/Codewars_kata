function sumArray(array) {
    if (!array) {
        return 0
    } else {
        array.sort(function (a, b) {
            return a - b
        })
        array.shift();
        array.pop();
        return (
                array.reduce(function (sum, acc) {
                    return sum + acc
                }, 0)
        )

    }
}

console.log(sumArray([6, 2, 1, 8, 10]))