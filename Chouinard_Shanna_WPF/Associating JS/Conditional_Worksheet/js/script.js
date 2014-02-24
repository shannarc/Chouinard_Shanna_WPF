//Conditional Worksheet   Group 1 Expressions with Conditionals


var tankHolds = 17;   //Tank holds 17 gallons
var mpg = 15;         //15 miles per gallon
var gasInTank = .25;  //25% gas left in tank

if(gasInTank > .75){
    //If it's more than .75
    console.log("Yes you can make it without stopping for gas");
}else if(mpg * gasInTank > 200){
    //If mpg times gas in the tank is greater than 200
    console.log("Yes you can make it without stopping for gas");
}else{
    //If it's less than .75
    console.log("You only have x gallons of gas in your tank, better get gas now while you can");
}





