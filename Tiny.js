// function solution(a, b, k) {

// }


// function solution(a, b) {
//     let tiny = 0;
//     let A= []
//     let pairs= []
//     for(let i=0; i< a.length; i++){
//         console.log("i am running parameter a " + a[i])
        
//     }
//     for (let i = 0; i < b.length; i++) {
//        console.log('i am running parameter b ' + b[i])
        
//     }
//     }
//     console.log(solution([1,4,3] , [1,3,6]))

function solution(a, b){
    
    let tiny = 0;
    // let A= []
    let reversedB= b.reverse()
    let pairs= []
for(let i=0; i< a.length; i++){
        console.log("i am running parameter a " + a[i])
        
    }
        

    for (let i = 0; i < reversedB.length; i++) {
               console.log('i am running parameter b ' + reversedB[i])
                
}
}
console.log(solution([1,4,3] ,[1,3,6]))