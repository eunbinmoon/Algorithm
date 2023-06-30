//순서쌍을 구하라
//i로 나눠서 나머지가 없는 몫이 한쌍 = 1

function solution(n) {
let result = 0

for(i=0; i<=n; i++){
    if(n%i === 0){
        result += 1
    }
}
return result
}