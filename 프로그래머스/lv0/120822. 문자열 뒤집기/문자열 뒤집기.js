//문자열을 뒤집어라
//오름차순 내림차순은 숫자에서만 되는것인가?

function solution(my_string) {
    let a = my_string.split('');
    let b = [];
    a.forEach(el => b.unshift(el))
    
    return b.join("")
}