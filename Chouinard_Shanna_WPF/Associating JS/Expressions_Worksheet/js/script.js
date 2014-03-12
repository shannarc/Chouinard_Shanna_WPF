//Shanna Chouinard   11 March 2014   Expressions Worksheet

//Slice of Pie Part 1
//A bunch of students are having a party and somebody ordered pizza. Create an expression that calculates how much pizza each partygoer will get at the party. (Assume all pizzas have the same number of slices and that the person dividing the pizza is really precise so this can be a decimal, like 3.52 slices etc.)

var slicesPizza = 8;   //Number of slices per pizza
var numPeople = 10;    //Number of people at the party
var numPizzas = 5;     //Number of pizzas ordered

var slicePerPer = numPeople * numPizzas / slicesPizza; //slices per person is the number of people multiplied by the number of pizzas and divided by the number of slices per pizza

console.log(slicePerPer);  //Print out the number of pieces of pizza per person

