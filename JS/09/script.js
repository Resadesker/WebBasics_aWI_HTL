// #1
for (let i = 0; i < 4; i++) {
    let row = "";
    for (let j = 0; j < 4; j++) {
        if (i % 2 === 0) {
            row += "X ";
        } else {
            row += "O ";
        }
    }
    console.log(row);
}

// #2

// LW1

let sum = 0;
for (let i = 2; i <= 100; i += 2) {
    sum += i;
}
console.log(sum);


// LW2

sum = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        sum += i;
    }
}
console.log(sum);


// #3 (Tim)

for (let i = 0; i < 5; i++) {
    let line = "";
    for (let j = 0; j < 5; j++) {
        if (i === 0 || j === 2) {
            line += "X";
        } else {
            line += " ";
        }
    }
    console.log(line);
}
