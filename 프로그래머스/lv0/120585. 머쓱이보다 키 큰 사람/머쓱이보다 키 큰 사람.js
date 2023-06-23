function solution(array, height) {
    let A = [];
    
    for(i=0; i<array.length; i++){
        if(array[i] > height){
            A.push(array[i])
        }
    }
    return A.length
}