function digitalClock(){
  var d = new Date();
  hours = d.getHours();
  minutes = d.getMinutes();
  seconds = d.getSeconds();
  setTimeout(digitalClock, 1000);
  if (hours<10){
    document.getElementById('hours').innerHTML = '0'+hours;
  }
  else{
    document.getElementById('hours').innerHTML = hours;
  }
  if (minutes<10){
    document.getElementById('minutes').innerHTML = '0'+minutes;
  }
  else{
    document.getElementById('minutes').innerHTML = minutes;
  }
  if (seconds<10){
    document.getElementById('seconds').innerHTML = '0'+seconds;
  }
  else{
    document.getElementById('seconds').innerHTML = seconds;
  }
  if (hours>12){
    document.getElementById('time').innerHTML = 'PM';
  }
  else{
    document.getElementById('time').innerHTML = 'AM';
  }

}
