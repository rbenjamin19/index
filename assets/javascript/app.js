    var count = 15

function checkIf(){
  if ($("#opt1").is(":checked")) {
  $("#question1").append("<p id='correct'>" + "You're correct!" + "</p>");
}
  else{
    $("#question1").append("<p id='wrong'>" + "You're wrong!" + "</p>");
  };

if ($("#opt2").is(":checked")) {
  $("#question2").append("<p id='correct'>" + "You're correct!" + "</p>");
}
  else{
    $("#question2").append("<p id='wrong'>" + "You're wrong!" + "</p>");
  };

if ($("#opt3").is(":checked")) {
  $("#question3").append("<p id='correct'>" + "You're correct!" + "</p>");
}
  else{
    $("#question3").append("<p id='wrong'>" + "You're wrong!" + "</p>");
  };

if ($("#opt4").is(":checked")) {
  $("#question4").append("<p id='correct'>" + "You're correct!" + "</p>");
}
  else{
    $("#question4").append("<p id='wrong'>" + "You're wrong!" + "</p>");
  };

};

var timer = setInterval(function() {
    $("#counter").html(count--);
    $("#show-number").html("<h2>" + "Time Remaining: " + count + " seconds" + "</h2>");
    if(count == 0){ clearInterval(timer);
    checkIf();
  }
}, 1000)
;