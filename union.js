function union(arg1,arg2){
    return [...new Set (arg1.concat(arg2))] 
}
console.log(union([1,2,3,4,5],[4,5,6,7,8]))