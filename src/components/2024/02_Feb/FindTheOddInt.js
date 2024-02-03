function findOdd2(A) {
  if (A.length === 1) {
    return A[0]
  } else {

    let arr = []

    A.forEach(function(val){ ++arr[val] || (arr[val] = 1)})
    for (let el in arr){
      if (arr[el] % 2 !== 0) {
        return el
      }
    }
  }
}

console.log(findOdd2([1,1,2]))
//shortest solution
// const findOdd = (xs) => xs.reduce((a, b) => a ^ b);

// function findOdd(A) {
//   if (A.length === 1) {
//     return A[0]
//   } else {
//
//
//     let repetitionsInfo = {}
//
//     for (let i = 0; i < A.length; i++) {
//       let currentItem = A[i]
//       repetitionsInfo[currentItem] = (repetitionsInfo[currentItem] || 0) +1
//     }
//     console.log(repetitionsInfo)
//
//     let oddRepeatedNum
//     let oddRepetitions = Infinity
//
//     for (let certainEl in repetitionsInfo) {
//       if (repetitionsInfo[certainEl] % 2 !== 0) {
//         oddRepetitions = repetitionsInfo[certainEl]
//         oddRepeatedNum = certainEl
//       }
//     }
//
//     return +oddRepeatedNum;
//   }
// }