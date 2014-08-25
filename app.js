var fizz = "fizz";
var buzz = "buzz";

$(document).ready(function() {
  var number = prompt("Please enter a number");

  var fizzBuzz = function(number) {
    var theNumber = +number;

    if (!isPositiveInteger(theNumber))
    {
      alert("Please enter a positive integer!");
      return;
    }

    for (var i = 1; i <= theNumber; i++)
    {
      var text = $("<p>" + getText(i) + "</p>");
      $("body").append(text);
    }
  };

  fizzBuzz(number);
});

function isPositiveInteger(number)
{
  return !isNaN(number) && number % 1 == 0 && number >= 0;
}

function getText(theNumber) {
  if (isDivisible(theNumber, 3) && isDivisible(theNumber, 5))
  {
    return fizz + " " + buzz;
  }

  if (isDivisible(theNumber, 3))
  {
    return fizz;
  }

  if (isDivisible(theNumber, 5))
  {
    return buzz;
  }

  return theNumber;
}

function isDivisible(theNumber, divisor) {
  return theNumber % divisor === 0;
}