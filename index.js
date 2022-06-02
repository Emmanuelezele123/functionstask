var proceed =  0
var points = 0 
var firstnumber = 1
var rangelimit = 1
var stage = 1
function getRandomNumberInRange(min, max) {
  return Math.random() * (max - min) + min;
}

do {
  var number = prompt("Guess the number");
  var secondnumber = firstnumber + rangelimit;
  var generatednum = getRandomNumberInRange(firstnumber,secondnumber)
    if(number === generatednum){
     console.log("You are correct")
      rangelimit+=1
      points+=1
      stage+=1
    }else{
       proceed = 1
    }
  
}while(proceed === 0)

console.log("end of the game")
console.log(generatednum)