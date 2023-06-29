//배열끼리 유사한 값이 몇개나 있는지 확인하는 문제
//배열을 순회하면서 같은 값이 있는지 하나씩 비교하기
//배열을 하나로 합쳐서 중복된 값이 있는지 없는지 확인하는 방법은?
//배열안의 문자를 오름차순으로 정리하기
//배열의 중복되는 값이 있으면 그 값을 새로운 배열에 넣어서 새로운 배열의 길이를 리턴?

function solution(s1, s2) {
    var answer = 0;
    let a = []
    s1 = s1.concat(s2)
    s1 = s1.sort()
    
    for(let i = 0; i < s1.length; i++){
        if(s1[i] === s1[i+1]){
            answer++
        }
    }   
    return answer;
}