function solution(nums) {
    return Array.isArray(nums) ? nums.sort((a, b) => a - b) : []
}

console.log(solution([1, 2, 3, 10, 5]))