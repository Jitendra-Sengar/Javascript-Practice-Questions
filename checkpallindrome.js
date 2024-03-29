function ispallindrome(str){
    var rev= str.split("").reverse().join("");
    if(str==rev){
        console.log("pallindrome");
    }
    else{
        console.log("not a pallindrome");
    
    }
}
ispallindrome("naman")
