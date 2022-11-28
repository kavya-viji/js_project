var population = parseInt(prompt("Enter the population"));
var rate = parseInt(prompt("Enter the rate"));
var noOfYears = parseInt(prompt("Enter the noOfYears"));
var presentPopulation = population*(1-(rate/100))**noOfYears;
alert (presentPopulation);