// If we write out the digits of "60" as English words we get "sixzero"; the number of letters in "sixzero" is seven. The number of letters in "seven" is five. The number of letters in "five" is four. The number of letters in "four" is four: we have reached a stable equilibrium.
//
//     Note: for integers larger than 9, write out the names of each digit in a single word (instead of the proper name of the number in English). For example, write 12 as "onetwo" (instead of twelve), and 999 as "nineninenine" (instead of nine hundred and ninety-nine).
//
// For any integer between 0 and 999, return an array showing the path from that integer to a stable equilibrium:
//
//     Examples
// numbersOfLetters(60) --> ["sixzero", "seven", "five", "four"]
// numbersOfLetters(1) --> ["one", "three", "five", "four"]

function numbersOfLetters(integer) {
    let resulted = getTheLetters(integer);
    let resulteWords = [];

    function getTheLetters(someNum) {
        const getNumbers = String(someNum).split('').map(Number);
        let arrayOfLetters = [];

        const getLetters = (num) => {
            switch (num) {
                case 0:
                    return 'zero';
                case 1:
                    return 'one';
                case 2:
                    return 'two';
                case 3:
                    return 'three';
                case 4:
                    return 'four';
                case 5:
                    return 'five';
                case 6:
                    return 'six';
                case 7:
                    return 'seven';
                case 8:
                    return 'eight';
                case 9:
                    return 'nine';
            }
        }

        for (let i = 0; i < getNumbers.length; i++) {
            arrayOfLetters.push(getLetters(getNumbers[i]));
        }

        return arrayOfLetters.join('');
    }

    resulteWords.push(getTheLetters(integer));

    while (resulted !== getTheLetters(resulted.length)) {
        resulted = getTheLetters(resulted.length);
        resulteWords.push(resulted);
    }

    return resulteWords;
}

console.log(numbersOfLetters(60));

//better ways to get letters

// const getLetters = (num) => {
//     const words = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
//     return Array.from(String(num), digit => words[Number(digit)]).join('');
// };
//    const getLetters = (num) => num.toString().split('').map(digit => ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'][+digit]).join('');
//const words = {
//         '0': 'zero',
//         '1': 'one',
//         '2': 'two',
//         '3': 'three',
//         '4': 'four',
//         '5': 'five',
//         '6': 'six',
//         '7': 'seven',
//         '8': 'eight',
//         '9': 'nine'
//     };
//
//     function digitToWord(digit) {
//         return words[digit];
//     }