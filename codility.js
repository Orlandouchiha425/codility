// // // you can write to stdout for debugging purposes, e.g.
// // // console.log('this is a debug message');

// function solution(A) {
//     // write your code in JavaScript (Node.js 8.9.4)
// //step 1) find the smallest number in array 
//     // A=[0,9,4,3,1]

//     let min = 0;

// //step 2 

// let exists = true; 
// while(exists ==true){
//     min = min + 1;
//    let j =0;
//     while( min != A[j] && j <= A.length +1 ){
//         j++
//     }
//     if(j > A.length ){
//         exists = false
//     }
    
// }

//     return min
    

// // 20> 14 =min==14
// // 14>10 = min ===10
// // 9 < 10 =min ===9
// // 7 < 9 = min === 7
// // 30< 7 = min === 7

// }
// console.log(solution([5, 6,1]))
//Line 9 min =20 , 
//Line 12 compare A[i]compared to  min   if A[i]= A[1] if is less than minimum  20 minimum will be equal to A[i]




function solutionTwo(B){
    B.sort(function(a,b ){
        return a-b
    })

let INDEX = 0;//0 1 2 3 4 .....15   
let result = 1;
while(INDEX< B.length ){


if(B[INDEX] == result){
    //-3 is equeal result (1)=if is true 
    //-2 is equeal result (1)=if is true 
    //0 if is equal to result 1 
    // 5 ==result 1   
    result +=1;  

}else if(B[INDEX] < result && B[INDEX] >1){   
    //-3< 1 and -3 >1 
    //  -2 < 1 and -2>1 
        //5<1 false                            
    result = B[INDEX];          
}
INDEX++ 
//we going to the top next index 
  
}

return result
}
// }
// console.log(solutionTwo([20,14,10,9,7,30,11,12,13,30,1,2,4,-2,0]))
console.log(solutionTwo([-3,0,5,-2,1]))
//[-3,-2,0,5]
// [-2,0,1,2,4,7,9,10,11,12,13,14,20,30,30]  thats what operation 44 - 46 ----does , sorts array 
///let j = 0 ; is just the index
//result is 1 ;
//line 50 j or 0 < B .length --this is to loop through array 
//line 52 we checked if the result (which is 1 from the beggining) exists in the array 