let banana = "Banane";
let apple = "Apple";

let bananaPricePerKilo = 2.14;
let applePricePerKilo = 3.43;

let appleAverageWeight = 0.34;
let bananaAverageWeight = 0.22;

let bananaPrice = bananaPricePerKilo * bananaAverageWeight;
let applePrice = applePricePerKilo * appleAverageWeight;

console.log("Price per Banana: " + bananaPrice);
console.log("Price per Apple: " + applePrice);

console.log("Bananas per kg: " + 1 / bananaAverageWeight);
console.log("Apples per kg: " + 1 / appleAverageWeight);

console.log("Price for 8 apples: " + applePrice * 8);
console.log("Price for 17 bananas:" + bananaPrice * 17);

console.log("Price for 1 ton apples: " + applePricePerKilo * 1000);
console.log("Price for 1 ton bananas:" + bananaPricePerKilo * 1000);