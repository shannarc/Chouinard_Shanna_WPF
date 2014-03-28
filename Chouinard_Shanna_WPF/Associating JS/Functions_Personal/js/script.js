//Shanna Chouinard   27 March 2014   Functions Personal




//Determine the average amount of minutes it takes to feed 4 dogs.

function  totalMins(){

var minsToFeed =[15, 10, 9, 14, 13]; //Amount of minutes it took to feed 4 dogs.

var totalMins = minsToFeed[0] + minsToFeed[1] + minsToFeed[2] + minsToFeed[3] + minsToFeed[4] / 5;   //Calculation of the total minutes it took to feed 4 dogs. Now divide the total by 5 to get the average amount of minutes to feed the dogs.

console.log("It takes an average of " + totalMins + " to feed four dogs!!!");  // print out the average minutes it takes to feed all four dogs
}
totalMins();