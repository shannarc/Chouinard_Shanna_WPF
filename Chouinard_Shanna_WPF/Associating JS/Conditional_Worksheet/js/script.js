//Group 3 Multiple Conditions
//Movie Ticket Price

//Problem: The local movie theatre in town has a ticket price of $12.00 but if you are a senior (55 and older), under 10 you get the discounted price of $7.00. In addition, if a customer is seeing a movie between 3pm and 5pm they can also get the discounted price.

var timeOfMovie = 2; //Time of Movie, assume whole numbers
var ageOfCust = 54; //Age of the customer

if (timeOfMovie > 5){
    //if time of movie is past 5:00, then print out to the console, "The ticket price is $12.00"
    console.log ("The ticket price is $12.00");
}else if(ageOfCust >= 55 ^ ageOfCust < 10){
    //if the age of the customer is 55 and older or the age of the customer is less than 10, print out to the console, "The ticket price is $7.00
    console.log ("The ticket price is $7.00");
}else{
    console.log ("The ticket Price is $12.00");
}