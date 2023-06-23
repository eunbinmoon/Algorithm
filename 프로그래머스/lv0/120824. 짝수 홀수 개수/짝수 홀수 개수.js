function solution(num_list) {
    let A = []
    let one = [];
    let two = [];
    
    for(i=0; i<num_list.length; i++){
        if(num_list[i]%2 === 0){
            two.push(num_list[i])
        } else if(num_list[i]%2 === 1){
            one.push(num_list[i]) 
        }
    }
            A.push(two.length,one.length)
return A
}