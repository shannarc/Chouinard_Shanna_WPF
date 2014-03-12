//Shanna Chouinard   11 March 2014   Expressions Worksheet

//Slice of Pie Part 11
//At the pizza party Sparky, the host's dog is excited, because he gets the leftover pizza after the slices have been divided up evenly among the guests. Assume guests get whole slices, how many whole slices will Sparky get to feast on?

var slicesPizza = 8;   //Number of slices per pizza
var numPeople = 10;    //Number of people at the party
var numPizzas = 5;     //Number of pizzas ordered

var remainder = numPizzas * slicesPizza % numPeople  //Sparky gets the remainder of the pizza
console.log(remainder)//Print out the number of pieces Sparky will get to eat
