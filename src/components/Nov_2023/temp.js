const myArray = [10,20,30,40,50]

function multiply (array) {
    for (let i = 0; i < array.length; i++) {
        array[i] *= 2
    }
}

console.log(multiply(myArray))