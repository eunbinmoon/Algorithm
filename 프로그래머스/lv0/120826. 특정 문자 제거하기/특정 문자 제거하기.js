function solution(my_string, letter) {
return my_string.split("").filter((ch) => !letter.includes(ch)).join("")
}