var fizz = "fizz";
var buzz = "buzz";

$(document).ready( function () {
  var number = prompt("Please enter a number:");
  addFizzBuzzToBody(number);
});

function addFizzBuzzToBody(maxNumberStr) {
  var maxNumber = +maxNumberStr;

  if (!isPositiveInteger(maxNumber))
  {
    alert("Please enter a positive integer!");
    return;
  }

  for (var i = 1; i <= maxNumber; i++)
  {
    $("body").append($("<p>" + getFizzBuzzText(i) + "</p>"));
  }
};

function isPositiveInteger(number)
{
  return !isNaN(number) && (number % 1 == 0) && (number >= 0);
}

function getFizzBuzzText(number) {
  if (isDivisible(number, 3) && isDivisible(number, 5))
    return fizz + " " + buzz;

  if (isDivisible(number, 3))
    return fizz;

  if (isDivisible(number, 5))
    return buzz;

  return number;
}

function isDivisible(number, divisor) {
  return number % divisor === 0;
}
