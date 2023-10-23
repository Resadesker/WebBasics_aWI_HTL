let random1 = Math.floor(Math.random() * 100);
let random2 = Math.floor(Math.random() * 100);

if (random1 < random2 && random1 < 50) {
    console.log("Num " + random1 + " is smaller than " + random2 + " and Mini")
}

if (random1 < 30 || random2 < 30) {
    console.log("One of numbers is less than 30")
}

if (random1 < 50 || random2 != 50) {
    console.log("Erste Zahl klein, zweite kein 50iger")
}