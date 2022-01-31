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


