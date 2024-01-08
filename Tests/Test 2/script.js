let kleinerGleich12 = 0;
let groesser12 = 0;
const anzahlDurchlaeufe = 10;

for (let i = 0; i < anzahlDurchlaeufe; i++) {
    const zufallszahl = Math.floor(Math.random() * (15 - 5 + 1)) + 5;

    if (zufallszahl > 12) {
        groesser12++;
        console.log(`Generierte Zufallszahl: ${zufallszahl}`);
    } else {
        kleinerGleich12++;
    }
}

console.log(`Anzahl der Zahlen kleiner oder gleich 12: ${kleinerGleich12}`);
console.log(`Anzahl der Zahlen größer als 12: ${groesser12}`);
