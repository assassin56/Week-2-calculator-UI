// Back-end Logic //
var add = function(number1, number2) {
  return number1 + number2;
};

var subtract = function(number1, number2) {
  return number1 - number2;
};

var multiply = function(number1, number2) {
  return number1 * number2;
};

var divide = function(number1, number2) {
  return number1 / number2;
};

// Front-end Logic (UI) //

$(document).ready(function() {
  $("form#calculator").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#input1").val());
    var number2 = parseInt($("#input2").val());
    var operator = $("input:radio[name=operator]:checked").val();
    var result;
    $("#output").text(result);
  });
  
  $("form#subtract").submit(function(event) {
    event.preventDefault();
    var number3 = parseInt($("#subtract3").val());
    var number4 = parseInt($("#subtract4").val());
    var result2 = subtract(number3, number4);
    $("#output2").text(result2);
  });

  $("form#multiply").submit(function(event) {
    event.preventDefault();
    var number5 = parseInt($("#multiply5").val());
    var number6 = parseInt($("#multiply6").val());
    var result3 = multiply(number5, number6);
    $("#output3").text(result3);
  });
  
  $("form#divide").submit(function(event) {
    event.preventDefault();
    var number7 = parseInt($("#divide7").val());
    var number8 = parseInt($("#divide8").val());
    var result4 = divide(number7, number8);
    $("#output4").text(result4);
  });
});