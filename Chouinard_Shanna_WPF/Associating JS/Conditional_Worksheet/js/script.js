//Group 2 Multiple Results
//Check the Login

//Problem: Make sure the user has the correct username and password. If the username does not match, a specific message for that should be printed to the console. If the password does not match, then a message should appear for that. Only one error message should appear.

var userName = "Shanna";       //Username entered by user
var passWord = "Chouinard";    //Password entered by user
var corUserName = "Shanna";    //Correct username
var corPassWord = "Chouinard"; //Correct password


if(userName === corUserName && passWord === corPassWord){
    //if user name is Shanna and password is Chouinard then print out to the console, "Welcome Shanna Chouinard"
    console.log ("Welcome Shanna Chouinard!");
}else if(userName != corUserName){
    //if user name is not correct, print out to the console, "user not found, try again"
    console.log ("User Not Found, Try Again!");
}else{
    //if password is not correct, print out to the console, "password does not match our records"
    console.log ("Password does not match our records!");
}
