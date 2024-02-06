function findOddNames(list) {
    // let oddDevNames = []

    return list.filter(dev => {
            let devNameAsciiSum = 0

            for (let i = 0; i < dev.firstName.length; i++) {
                const char = dev.firstName[i];
                const devNameAsciiCode = dev.firstName.charCodeAt(i);
                devNameAsciiSum += devNameAsciiCode
            }
            return devNameAsciiSum % 2 !== 0

        }
    )
    // return oddDevNames
}

// best solution
// function findOddNames(list) {
//     return list.filter( (d) => {
//         return d.firstName.split('').reduce(((r, e) => r + e.charCodeAt(0)), 0) % 2 !== 0
//     });
// }
//
//
// console.log(findOddNames([{
//     firstName: 'Andrei',
//     lastName: 'E.',
//     country: 'Romania',
//     continent: 'Europe',
//     age: 59,
//     language: 'C'
// }, {
//     firstName: 'Chloe',
//     lastName: 'K.',
//     country: 'Guernsey',
//     continent: 'Europe',
//     age: 88,
//     language: 'Ruby'
// }, {
//     firstName: 'Viktoria',
//     lastName: 'W.',
//     country: 'Bulgaria',
//     continent: 'Europe',
//     age: 98,
//     language: 'PHP'
// }]))