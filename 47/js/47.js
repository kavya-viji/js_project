var a = prompt("Enter the first number: ");
var b = prompt("Enter the second number: ");
var c = prompt("Enter the third number: ");
var z = b*b-4*a*c;
if (z > 0) {
    root1 = (-b + Math.sqrt(z)) / (2 * a);
    root2 = (-b - Math.sqrt(z)) / (2 * a);
    console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
}
