// An infinite number of shelves are arranged one above the other in a staggered fashion.
//     The cat can jump either one or three shelves at a time: from shelf i to shelf i+1 or i+3 (the cat cannot climb on the shelf directly above its head), according to the illustration:
//
//                  ┌────────┐
//                  │-6------│
//                  └────────┘
// ┌────────┐
// │------5-│
// └────────┘  ┌─────► OK!
//             │    ┌────────┐
//             │    │-4------│
//             │    └────────┘
// ┌────────┐  │
// │------3-│  │
// BANG!────┘  ├─────► OK!
//   ▲  |\_/|  │    ┌────────┐
//   │ ("^-^)  │    │-2------│
//   │ )   (   │    └────────┘
// ┌─┴─┴───┴┬──┘
// │------1-│
// └────────┘
// Input
// Start and finish shelf numbers (always positive integers, finish no smaller than start)
//
// Task
// Find the minimum number of jumps to go from start to finish
//
// Example
// Start 1, finish 5, then answer is 2 (1 => 4 => 5 or 1 => 2 => 5)
//My solution
 function solution(start, finish) {
    let jumpsNumber = 0
    let currentPosition = start
    const jump = (step) => {
        jumpsNumber++
        return currentPosition + step
    }
    const jumpOnNext = (currentPosition) => {
        jumpsNumber++
        return currentPosition + 1
    }
    while (currentPosition + 3 <= finish) {
        currentPosition = jump(3)
    }
    while (currentPosition + 1 <= finish) {
        currentPosition = jump(1)
    }
    return jumpsNumber;
}

console.log(solution(1, 5))