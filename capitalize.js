var str="hello bhai kese ho";
function capitalize(str){
       var allwords=str.split(" ").map(function(word){

        return word.charAt(0).toUpperCase()+word.substring(1)
       })   
    return allwords.join(" ")
}
console.log(capitalize(str))