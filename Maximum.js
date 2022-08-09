function max(arr) {
    arr.sort(function(a,b){
        return a -b 
    })
    return console.log(arr[arr.length -1])

}
max([5,6,100,7,1])



function min(arr) {
    arr.sort(function(a,b){
        return a -b 
    })
    return console.log(arr[0])

}
min([5,6,100,7,1])