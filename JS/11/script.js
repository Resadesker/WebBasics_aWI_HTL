// #1

const numbers = [4, 1, 2, 3];
numbers.push(17, 199);

let sum = 0;
for (const number of numbers) {
    console.log(number);
    sum += number;
}

const average = sum / numbers.length;
console.log("Summe: " + sum);
console.log("Mittelwert: " + average);

// #2

const friends = ["Susi", "Paula", "Hans"];
const newFriend = "Sepp";
friends.push(newFriend);

let sentence = "Meine Freunde sind " + friends[0];
for (let i = 1; i < friends.length; i++) {
    sentence += ", " + friends[i];
}

console.log(sentence);
