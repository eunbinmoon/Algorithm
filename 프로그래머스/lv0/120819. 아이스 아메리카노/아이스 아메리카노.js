function solution(money) {
    
    let count = Math.floor(money/5500)
    var answer = [count, money%5500];
    
    return answer;
}