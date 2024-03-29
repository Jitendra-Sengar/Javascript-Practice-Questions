var str="Ram is a good boy";
var savedStr=str.split(" ")
    .map(function(word){
    return word.split("").reverse().join()
})
var a=savedStr.join(" ")
console.log(a)