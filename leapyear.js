function leapYear(){
  var date = document.getElementById("date");
  var year = getYearFromDate(date); //First we need to parse year from the given date.

  if(checkIfLeapYear(year) == true){
    console.log("Yes, " + year + " is leap year.");
  }
  else{
    console.log("No, " + year + " is not a leap year");
  }

}


/*We do not need to know how exactly this function works at the moment.
All we need to know is that this function returns the year from the date that
we give it.
*/
function getYearFromDate(date){
  var d = new Date(date.value);
  var year = d.getFullYear();
  return year;
}


//TODO: Your code here. This function returns true if the year is leap year, and false if it is not.
function checkIfLeapYear(year){
  if (year % 4 == 0){
    if (year % 100 == 0){
      if (year % 400 == 0){
        return true;
      }
      return false;
    }
    return true;
  }
  else{
    return false;
  }
}
