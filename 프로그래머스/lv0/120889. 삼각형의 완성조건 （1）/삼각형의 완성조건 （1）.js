//sides = 세변의 길이
//삼각형이 만들어 질 수 있는 공식은 가장 긴 변의 길이는 두변길이의 합보다 작아야한다.
//삼각형 만들 수 있으면 1 아니면 2 리턴
//배열 안의 최대값 구하기 Math.max
function solution(sides) {
    let a = sides.sort((a,b)=>(b-a))
  return  a[0]< a[1]+a[2]? 1 : 2
    }
