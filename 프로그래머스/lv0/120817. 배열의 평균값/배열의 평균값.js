function solution(numbers) {
 
const sum = numbers.reduce((acc, cur)=> acc+cur)
 answer = sum/numbers.length
    return answer;
}