//Shanna Chouinard   19 March 2014   Conditionals "Industry"

//Problem:  Our work schedule is four 10 hour shifts. We come in at 6:30 and get off at 5:00. If it snows outside, we get off an hour early. We also get off an o\hour early on Fridays. What time do we get off?

var weather = "sunny";      //Is it snowing outside or not?
var dayOfWeek = "Friday";  //What day of the week is it?

if(weather === "snow" ^ dayOfWeek === "Friday"){
    //if it is snowing outside or it is Friday, print out to the console, "you will be getting off at 4:00 today"
    console.log("You will be getting off at 4:00 today!");
}

