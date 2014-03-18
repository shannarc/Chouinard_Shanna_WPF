// Conditional Logic - else if


var kidHeight = 50;
var minHeight = 48;
var wParentHeight = 45;

//if the child is old enough, print to the console "you can ride"
//if the kid is over 48 inches in height
if(kidHeight > minHeight){
    //You can ride!
    console.log("You can ride the coaster!");
}else if(kidHeight > wParentHeight){
    //You can ride with a parent present
    console.log("You can ride, but only with a parent present");
}else{
    //sorry you have growing to do
    console.log("Sorry kid, you've got some growing to do first!")
}