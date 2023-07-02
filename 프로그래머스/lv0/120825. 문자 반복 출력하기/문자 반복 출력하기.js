function solution(my_string, n) {
//     let a = my_string.split('');
//     let b = [];
    
//     for(let i=0; i<a.length; i++){
//      b.push(...Array(n).fill(a[i]));
 
//     }
//     return b.join('');
    
    return my_string.split("").map((v)=>v.repeat(n)).join("")
}