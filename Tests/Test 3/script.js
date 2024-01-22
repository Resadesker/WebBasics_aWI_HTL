let iterations_of_49 = 0;

for (let i = 0; i < 10; i++) {
    let num = Math.floor(Math.random() * (51 - 35 + 1)) + 35;
    if (num < 38 && num > 36) {
        console.log(num);
    }
    else if (num == 35) {
        console.log("Ohhh");
    }
    else if (num == 50 || num == 51) {
        console.log("Jupidu");
    }
    else if (num == 49) iterations_of_49++;
}

console.log("49 ist " + iterations_of_49 + " Mal vorgekommen.")