//Shanna Chouinard   11 March 2014   Expressions Worksheet

//Average Shopping Bill
//You are budgeting your money for the year and must calculate your average weekly grocery shopping spending over the past five weeks. Store the past five grocery totals as a list in an array. Create an expression that will use the items in the array to calculate the average amount spent on groceries.

var groceryTotals = [100, 110, 208, 95, 129];  // grocery spending aver a 5 week period

var average = groceryTotals[0] + groceryTotals[1] + groceryTotals[2] + groceryTotals[3] + groceryTotals[4] / 5;//To calculate the average spending over a 5 week period, you must add up the total amount spent and divide it by the number of weeks
console.log(average);//Print out the average spending for 5 weeks
