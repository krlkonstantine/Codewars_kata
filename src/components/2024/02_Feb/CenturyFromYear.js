function century(year) {
    return year % 100 === 0 ? (year / 100) : (Math.ceil(year / 100))
}

console.log(century(1705))
console.log(century(1900))
console.log(century(1601))
console.log(century(1705))
console.log(century(89))