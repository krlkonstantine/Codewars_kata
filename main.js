const small = document.getElementById("small")
console.log(small)

function onClickHandler() {
    alert("click")
}

small.addEventListener("click", onClickHandler)

let user = {
    "name": "Peter",
    "age": 18,
    "address": {
        "contry": "Moldova, Republic of",
        "city": {
            "title": "Chisinau",
            "status": "Kaupfstadt",
            "street": {
                "title": "Persikovsky",
                "number": 45
            }
        }
    }

}


console.log(user.address.city.title)

console.log(user["address"]["city"]["title"])

user["table"] = "brown"

console.log(user)

user[0] = "super Dimych"
console.log(user)

user["0"] = "super Dimych"
user["1"] = "super-puper Dimych"
console.log(user)

user["table"] = "brown"
user["Hi, how are you?"] = "GDE DANGY??"
console.log(user)

user[{}] = "hello"

console.log(Object.keys(user))
console.log(Object.values(user))

let animalArray = []

for (let i = 0; i < 1000; i++) {
    animalArray[i] = "Yo"
}

console.log(animalArray)

const todoList_ID_1 = "1jhhgkjg-8768"
const todoList_ID_2 = "2jhhgkjg-8768"
const todoList_ID_3 = "3jhhgkjg-8768"

const todoLists = [
    {
        id: todoList_ID_1,
        title: "what to learn",
        filter: "all",
    }, {
        id: todoList_ID_2,
        title: "what to buy",
        filter: "completed",
    }, {
        id: todoList_ID_3,
        title: "what to drink",
        filter: "active",
    },
    {},
]

let tasks = {
    [todoList_ID_1]: [
        {id: 11, title: "HTML&CSS", isDone: true},
        {id: 12, title: "JS", isDone: true},
        {id: 13, title: "ReactJS", isDone: false},
        {id: 14, title: "Rest API", isDone: false},
        {id: 15, title: "GraphQL", isDone: false},
    ],
    [todoList_ID_2]: [
        {id: 11, title: "HTML&CSS", isDone: true},
        {id: 11, title: "HTML&CSS", isDone: true},
        {id: 15, title: "DDDAAAAAAAAAA", isDone: true},
        {id: 11, title: "HTML&CSS", isDone: true}
    ],
    [todoList_ID_3]: [
        {id: 11, title: "HTML&CSS", isDone: true},
        {id: 12, title: "JS", isDone: true},
        {id: 13, title: "ReactJS", isDone: false},
        {id: 11, title: "HTML&CSS", isDone: true}
    ]
}
console.log(tasks[todoList_ID_1].find(t => t.title === "ReactJS"))
console.log(tasks[todoList_ID_1][3])
console.log(tasks[todoList_ID_1][1].isDone)
console.log(tasks[todoList_ID_2].find(t => t.id === 15).title)

const students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    }
];

const numbers = [1, 2, 3, 4, 5, 6]

console.log(numbers.reduce((acc,el) => {
return acc + el
},0))

console.log(numbers.reduce((acc,el) => acc > el ? acc : el)
)
let scoresSum = 0
console.log(students.reduce((acc, el) => acc + el.scores,0))
console.log(students.reduce((acc,el) => {
    if (el.scores >= 100) {
        acc.push(el)
    } return acc
},[]))


//замыкания,  лексическое окружение, рекурсия

//{obj} ->
//ля каждого объекта кроме объявления, создается объект LE
//в котором есть пустой объекст и ссылка на такой-же объект или null
//он создается для скрипта

let name; // {name: undefined} -> null
name = 'Alex' // {name : "Alex"}
name = "Hanneh" // {name : "Hanneh"} - теперь объект будет вот таким, забываем о преддущем

// скрипт создает лексическое окружение - такой объект, который содержит ключ значение с
// инфой о других объектах из скрипта, и который потом ведет к другим объектам
// для каждой переменной создается вот такой скрытый объект - лексическое окружение
// в нем будет инфа о своем объекте и уже ссылка на другие, содержащиеся переменные, объекты итд
//созданные для переменных и функции внутри этого объекта
//важно знать что дял функции создается объект Environment т.к. функцию можно вызывать повторно

//есть function declaration function expreion
//при декларировании можно вызывать функцию до ее дкларации, начинается всегда с function
//при expresion неьзя так сделать ткт пееменной только потом присвоят значение
//expresion этто когда мы фн записываем в переменную, когда етсь знак равно

//пока мы функцию не вызываем для нее не создается объекст лексического окруения
//на вызовы блоков как if, whilwe тоже созд объект
//но для функции объекты другие так как фнукции можно вызывать много раз

//параметры можно рассматривать как переменные которе мы создаем внутри функции

//замыкание это спосоность функции запоминать в каком лексическом окружении она бла создана
//благодаря скрытой переменной Environment, любая фн запомнимает в каком скоупе/ле она бла создана
//когда фн срабатывает, так как она помнит свой скоуп, она сразу знает где искать переменные
//сначала у себя, а потом на уровень выше - уже в скоупе где она была создана

//stack

//программнй
//выделенная часть оперативной памяти для какой-либо программы - еще говорят стэк вызовов
//

//аппаратный

//FILO FIFO first in last oout / first out

//рекурсия - вызов функцией самой себя (рекурсивный вызов)
//любая функция должа иметь базовую ветку - момен когда прекращается рекурсия
//если это условия не выполнить, стек переполнится
//на сте выделаются порядка 8мб, потом ошибка -stack overflow
//поэтому базовая ветвь крайне важна
//один вазов функции самой себя это шаг рекурсии
//это когда мы на стэк еще один стэк себя помещаем


//--------------------------------------------JS NATIVE 10 -- PROMISES ----------
// тот кто выполняет запрос называется клиентом, тот кто отвечает на запрос называется сервером