function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function supercalculation(a, b) {
    return (a + b) / 2 * a;
}

function printEasterDate(year) {
    const N = year - 1900;
    const A = N % 19;
    const B = Math.floor((7 * A + 1) / 19);
    const M = (11 * A + 4 - B) % 29;
    const Q = Math.floor(N / 4);
    const W = (N + Q + 31 - M) % 7;
    const P = 25 - M - W;

    const month = Math.floor((P + 34) / 31); // März (3) oder April (4)
    const day = (P + 34) % 31 + 1;

    console.log(`Ostern im Jahr ${year} ist am ${day}. ${month === 3 ? "März" : "April"}`);
}


console.log("Addition: " + add(5, 3));
console.log("Subtraktion: " + subtract(8, 2));
console.log("Multiplikation: " + multiply(4, 6));
console.log("Supercalculation: " + supercalculation(5, 3));
printEasterDate(2024);