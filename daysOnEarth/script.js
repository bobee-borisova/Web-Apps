var date = prompt("What is your date of birth?", "");

// To set two dates to two variables
var date1 = new Date(date);
var date2 = new Date("04/21/2022");

// To calculate the time difference of two dates
var Difference_In_Time = date2.getTime() - date1.getTime();

// To calculate the no. of days between two dates
var Difference_In_Days = Math.round(Difference_In_Time / (1000 * 3600 * 24));

//To display the final no. of days (result)
document.getElementById("days").innerHTML = Difference_In_Days;


