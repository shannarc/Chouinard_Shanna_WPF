//Shanna Chouinard   19 March 2014
//Conditionals Personal

//Problem:  Will I ride on the Harley today or will I drive the car? If it is windy, rainy or below 80 degrees, I will drive the car.  otherwise I will ride on the Harley!

var weather = "windy";  //how is the weather, ie windy, rainy, snowy
var temp = 79;         //what is the temperature using whole numbers

if(weather === "windy" ^ weather === "rainy"){
    //If it is windy or rainy, print out to the console, "I will drive the car today!"
    console.log ("I will drive the car today!");
}else if(weather = "Sunny" && temp < 80){
    //If it is sunny but the temperature is less than 80 degrees, print out to the console, "It is not warm enough to ride the Harley!"
    console.log ("It is not warm enough to ride the Harley!");
}
