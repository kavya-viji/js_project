var sp = prompt("enter sp");
sp = parseInt(sp);
var p = prompt("enter profit percentage");
p = parseInt(p);
var cp;
cp = 100/(100+p)*sp;
alert (cp);