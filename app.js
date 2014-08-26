var fizz = "fizz";
var buzz = "buzz";

$(document).ready(function() {

  var fizzBuzz = function(number) {
    var theNumber = +number;

    if (!isPositiveInteger(theNumber))
    {
      alert("Please enter a positive integer!");
      return;
    }

    for (var i = 1; i <= theNumber; i++)
    {
      $("body").append($("<p>" + getFizzBuzzText(i) + "</p>"));
    }
  };

  var number = prompt("Please enter a number:");
  fizzBuzz(number);
});

function isPositiveInteger(number)
{
  return !isNaN(number) && (number % 1 == 0) && (number >= 0);
}

function getFizzBuzzText(theNumber) {
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
