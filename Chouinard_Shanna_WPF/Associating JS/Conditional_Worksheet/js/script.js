//Group 1 Expressions with Conditionals
//Last Chance for Gas

//Problem: A driver has to determine if they can make it across the desert with their current fuel. They are about to pass the last gas station for the next 200 miles and they need to determine if they should stop now for gas or not.

var gasEfficiency = 13   //gas efficiency in mpg
var gasRemaining = 75    //gauge reading of the gas tank in %
var gasTankHolds = 16    //car's gas tank capacity in gallons

if (gasTankHolds * gasRemaining / 100 * gasEfficiency > 200){
    //If its more than 200
    console.log ("Yes you can make it without stopping for gas!");
}else{
    //if its less than 200
    console.log ("You only have X gallons of gas in your tank, better get gas now while you can!");
}
