function whatCentury(year) {
    if (year % 100 === 0) {
        return `${year / 100}th`;
    } else {
        let century = Math.ceil(year / 100);
        if (century % 100 === 11 || century % 100 === 12 || century % 100 === 13) {
            return `${century}th`;
        } else if (century % 10 === 1) {
            return `${century}st`;
        } else if (century % 10 === 2) {
            return `${century}nd`;
        } else if (century % 10 === 3) {
            return `${century}rd`;
        } else {
            return `${century}th`;
        }
    }
}

console.log(whatCentury("1999"))
console.log(whatCentury("2011"))
console.log(whatCentury("1911"))
console.log(whatCentury("2154"))
console.log(whatCentury("2259"))
console.log(whatCentury("2000"))

// function whatCentury(year) {
//     var century = Math.ceil(year / 100);
//     return century + (century < 20 ? 'th' : ['th', 'st', 'nd', 'rd'][century % 10] || 'th');
// }
//
// function whatCentury(year) {
//     var century = Math.ceil(year / 100);
//     if (century > 10 && century < 20) return century + "th";
//     switch (century % 10) {
//         case 1:
//             return century + "st";
//         case 2:
//             return century + "nd";
//         case 3:
//             return century + "rd";
//         default:
//             return century + "th";
//     }
// }