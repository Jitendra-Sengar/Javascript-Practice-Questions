var str="mango";
function occu(str){
    var occurences={};
     str.split("").forEach(function(elem){
        if(occurences.hasOwnProperty(elem)===false){
            occurences[elem]=1;
        }
        else{
            occurences[elem]++;
        }
    })
    return occurences
}
console.log(occu(str))