function getWinner(listOfBallots) {
    //Мы получаем массив кандидатов, каждое упоминание кандидата это голос за него
    // 1. Выясняем у кого сколько вообще есть голосов. Пробегаем по массиву
    //и создаем объект, у которого ключем будет кандидат, а значением кол-во голосов
    // 2. Пробегаемся уже по объекту с инфой, и выявляем у кого больше голосов
    //и главное сколько конкретно
    // 3. Убеждаемся, что для победы у кандидата абсолютное большинство


    let candidatesVotes = {}

    for (let i = 0; i < listOfBallots.length; i++) {
        let currentElement = listOfBallots[i]
        candidatesVotes[currentElement] = (candidatesVotes[currentElement] || 0) + 1
    }

    let mostlyVotedCandidate
    let maxVotesCount = 0

    for (let element in candidatesVotes) {
        if (candidatesVotes[element] > maxVotesCount) {
            mostlyVotedCandidate = element
            maxVotesCount = candidatesVotes[element]
        }
    }

    return maxVotesCount > listOfBallots.length/2 ? mostlyVotedCandidate : null

}
//good solution
// function getWinner(list) {
//     var arr = [], winNum = list.length/2;
//     Создается массив arr, который будет использоваться для подсчета голосов
//     каждого кандидата. winNum устанавливается в половину длины массива list,
//     это значение будет использоваться для определения, когда кандидат победил,
//     получив абсолютное большинство голосов.
//     list.forEach(function(val){ ++arr[val] || (arr[val]=1) });
//     Происходит итерация по массиву list с использованием метода forEach.
//     Для каждого элемента массива выполняется функция, которая увеличивает
//     счетчик голосов для кандидата с именем val на 1. Если элемента с таким именем
//     еще нет в массиве arr, устанавливается значение 1.
//     for(var name in arr) if(arr[name] > winNum) return name;
//     Происходит цикл for-in, который проходит по свойствам массива arr.
//     Если количество голосов для кандидата (arr[name]) превышает winNum
//     (половину общего числа голосов), то этот кандидат объявляется победителем
//     , и его имя возвращается из функции
//     return null;
// }
