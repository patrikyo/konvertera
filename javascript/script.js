window.onload = function(){
  var kilometer = document.getElementsByClassName("kmh");
  var milesPerHour = document.getElementsByClassName("mph");

  function kmTillMph(){
    var kmhVaerde = parseFloat(kilometer[0].value);    
    mph = (kmhVaerde * 0.6215);
    mphAvrundad = Math.round(mph * 100)/100;
    milesPerHour[0].value = mphAvrundad;
  }

  function mphTillKmh(){
    var mphVaerde = parseFloat(milesPerHour[0].value);    
    kmh = (mphVaerde * 1.609);
    mphAvrundad = Math.round(kmh * 100)/100;
    kilometer[0].value = mphAvrundad;
  }
  kilometer[0].addEventListener('input' , kmTillMph);
  milesPerHour[0].addEventListener('input' , mphTillKmh);
};  