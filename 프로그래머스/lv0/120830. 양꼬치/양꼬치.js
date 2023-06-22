// 양꼬치 10개 먹으면 음료수 서비스
// 양꼬치 20개 먹으면 음료수 2개 서비스 =(양꼬치 10개 먹으면 음료수 서비스)*2
// 합계는 양꼬치 12,000*n + 2,000*k

function solution(n, k) {
    if(n>=10){
        let service = Math.floor(n/10)
        answer =  12000*n + 2000*k - (service*2000)
    } else{
           answer = 12000*n + 2000*k
    }

    return answer;
}