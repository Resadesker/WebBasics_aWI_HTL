import { createInterface } from "readline"

const readline = createInterface({
    input: process.stdin,
    output: process.stdout
})

const readLineAsync = () => {
    return new Promise((resolve) => {
        readline.question("", (userRes) => {
            resolve(userRes);
        });
    });
};

// Bankkonto-Simulation
let balance = 1000; // Anfangsguthaben

const main = async () => {
    console.log("Willkommen bei der Bankkonto-Simulation!");
    while (true) {
        console.log("\nWählen Sie eine Option:");
        console.log("1. Einzahlen");
        console.log("2. Abheben");
        console.log("3. Kontostand");
        console.log("4. Beenden");

        const choice = await readLineAsync();

        switch (choice) {
            case "1":
                console.log("Geben Sie den Betrag zum Einzahlen ein:");
                const depositAmount = parseFloat(await readLineAsync());
                if (!isNaN(depositAmount) && depositAmount > 0) {
                    balance += depositAmount;
                    console.log(`Einzahlung von ${depositAmount} erfolgreich.`);
                } else {
                    console.log("Ungültiger Betrag.");
                }
                break;

            case "2":
                console.log("Geben Sie den Betrag zum Abheben ein:");
                const withdrawAmount = parseFloat(await readLineAsync());
                if (!isNaN(withdrawAmount) && withdrawAmount > 0) {
                    if (withdrawAmount <= balance) {
                        balance -= withdrawAmount;
                        console.log(`Abhebung von ${withdrawAmount} erfolgreich.`);
                    } else {
                        console.log("Nicht ausreichend Guthaben.");
                    }
                } else {
                    console.log("Ungültiger Betrag.");
                }
                break;

            case "3":
                console.log(`Ihr Kontostand beträgt: ${balance}`);
                break;

            case "4":
                console.log("Vielen Dank und auf Wiedersehen!");
                readline.close();
                return;

            default:
                console.log("Ungültige Option. Bitte wählen Sie 1, 2, 3 oder 4.");
        }
    }
};


main();