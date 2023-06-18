function solution(n) {
    var answer = [];
    //주어진 수 아래를 다 배열에 담기
    //홀수 분리하기 n%2 === 1
    //오름차순으로 정리하기 ((a,b)=>a-b)
    
    
for(let i=0; i <= n; i++)
    if( i % 2 === 1 ){
        answer.push(i)
    }
    
    return answer;
}