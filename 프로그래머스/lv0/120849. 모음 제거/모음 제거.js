function solution(my_string) {
    let a = ["a","e","i","o","u"]
     my_string = my_string.split("").filter((ch)=>!a.includes(ch)).join("")
    return my_string
}