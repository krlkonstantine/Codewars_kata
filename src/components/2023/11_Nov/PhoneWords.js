// Given a string of numbers, you must perform a method in which you will translate this string into text, based on the below image:
//
//
//     For example if you get "22" return "b", if you get "222" you will return "c". If you get "2222" return "ca".
//
//     Further details:
//
//     0 is a space in the string.
// 1 is used to separate letters with the same number.
//     always transform the number to the letter with the maximum value, as long as it does not have a 1 in the middle. So, "777777" -->  "sq" and "7717777" --> "qs".
//     you cannot return digits.
//     Given a empty string, return empty string.
//     Return a lowercase string.
//     Examples:
// "443355555566604466690277733099966688"  -->  "hello how are you"
// "55282"                 -->  "kata"
// "22266631339277717777"  -->  "codewars"
// "66885551555"           -->  "null"
// "833998"                -->  "text"
// "000"                   -->  "   "

function phoneWords(stringOfNums) {
    let resultedArrayOfLetters = [];
    const letters = {
        0: ' ',
        1: '',
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'pqrs',
        8: 'tuv',
        9: 'wxyz'
    };
    let currentNumber = stringOfNums[0];
    let currentCount = 1;

    for (let i = 1; i <= stringOfNums.length; i++) {
        if (stringOfNums[i] === stringOfNums[i - 1]) {
            // Проверяем, если текущий символ - пробел, добавляем его в resultedArrayOfLetters
            if (stringOfNums[i] === '0') {
                resultedArrayOfLetters.push(' ');
            } else {
                if ((stringOfNums[i] === '7' || stringOfNums[i] === '9') && currentCount === 4) {
                    resultedArrayOfLetters.push(letters[currentNumber][currentCount - 1]);
                    currentCount = 1;
                    //смотрим если идет 7 или 9 и уже 4, то значит пора добавлять
                    //букву в массив и прерывать цикл
                } else if (stringOfNums[i] === '7' || stringOfNums[i] === '9') {
                    currentCount++;
                } else if (currentCount >= 3) {
                    resultedArrayOfLetters.push(letters[currentNumber][currentCount - 1]);
                    currentCount = 1;
                    //а для остальных если канутер больше трех то уже прерываем
                } else {
                    currentCount++;
                }
            }
        } else {
            //когда прервали попадаем сюда. Тут добавл в цикл
            //и обнуляем каунтер
            resultedArrayOfLetters.push(letters[currentNumber][currentCount - 1]);
            currentNumber = stringOfNums[i];
            currentCount = 1;
        }
    }

    return resultedArrayOfLetters.join('');
}

console.log(phoneWords('3833332888933344999933733333118877777777333'));




console.log(phoneWords('443355555566604466690277733099966688'))
console.log(phoneWords('im a tester'))
console.log(phoneWords('codewars'))
console.log(phoneWords('kumite'))
console.log(phoneWords('000'))