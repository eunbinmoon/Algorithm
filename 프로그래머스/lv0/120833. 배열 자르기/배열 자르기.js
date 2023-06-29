//주어진 배열에서 주어지는 매개변수의 인덱스 사이의 값을 자르기?
//메서드가 있었는데 이건 slice였나? 확인해보자
function solution(numbers, num1, num2) {
    return numbers.slice(num1, num2+1);

}