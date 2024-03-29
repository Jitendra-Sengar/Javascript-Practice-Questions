var num=586;
function reversekaro(num){
    return Number(num.toString().split("").reverse().join(""))
}
var c=reversekaro(num)
console.log(c)

//Another Method
function revnum(num){
    var rev=0;
    while(num>0){
        var rem=num%10;
      rev=rev*10+rem
      num=Math.floor(num/10)
    }
      return rev;
    
}
console.log(revnum(963));