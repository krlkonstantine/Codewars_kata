// Consider the word "abode". We can see that the letter a is in position 1 and b is in position 2. In the alphabet, a and b are also in positions 1 and 2. Notice also that d and e in abode occupy the positions they would occupy in the alphabet, which are positions 4 and 5.
//
// Given an array of words, return an array of the number of letters that occupy their positions in the alphabet for each word. For example,
//
//     solve(["abode","ABc","xyzD"]) = [4, 3, 1]
// See test cases for more examples.
//
//     Input will consist of alphabet characters, both uppercase and lowercase. No spaces.
//
//     Good luck!
//My solution
function solve(arr) {
    let wordsResult = []
    arr.map(word => {
            let counter = 0;
            for (let i = 0; i < word.length; i++) {
                const char = word[i].toLowerCase()
                //получил конкретный символ в слове
                //теперь надо узнать его номер в алфавите
                const positionInAlphabet = char.charCodeAt(0) - 'a'.charCodeAt(0) + 1
                //узнали номер в алфавите (считаем относительно символа а + 1)
                //теперь нам надо проверить, равна ли позиция в алфавите то в слове
                //и если да, инкрементим счетчик
                if (positionInAlphabet === i + 1) {
                    counter++
                }
            }
            wordsResult.push(counter)
        }
    )
    return wordsResult
}

console.log(solve(["abode", "ABc", "xyzD"]))

//best solution
// function solve_(arr){
//     var alphabeth = "abcdefghijklmnopqrstuvwxyz";
//     return arr.map(x => x.toLowerCase().split('').filter((y,i) => i==alphabeth.indexOf(y)).length);
// };