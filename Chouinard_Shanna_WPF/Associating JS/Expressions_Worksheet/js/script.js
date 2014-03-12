//Shanna Chouinard   11 March 2014   Expressions Worksheet

//Discounts
//Calculate the discounted price for an item. Create an expression that will calculate the discounted price with and without sales tax. (It is acceptable for the result to have more than two digits after the decimal. $345.896 for example.)

var originalPrice = 100;
var discount = .10;
var salesTax = .7;

var discountItem = originalPrice - discount * 100;
var itemWTax = discountItem * salesTax
console.log(itemWTax);