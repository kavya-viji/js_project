var p = prompt("Enter the Principle");
p = parseInt(p);
var r = prompt("Enter the Rate of Interest");
r = parseInt(r);
var n = prompt("Enter the Year");
n = parseInt(n);
var a;
a=p*(1+(r/100))**n;
var ci;
ci=a-p;
alert (ci);