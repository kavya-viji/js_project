var l = parseInt(prompt("Enter a length:"));
var h = parseInt(prompt("Enter a height:"));
var r = (l**2)-(h**2);
r=Math.sqrt(r);
var curvedSurface = 22/7*r*l;
alert (curvedSurface);