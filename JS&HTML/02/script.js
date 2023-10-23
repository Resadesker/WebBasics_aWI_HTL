document.addEventListener("DOMContentLoaded", function() {
    const minInput = document.getElementById("min");
    const maxInput = document.getElementById("max");
    const generateButton = document.getElementById("generate");
    const resultSpan = document.getElementById("result");

    generateButton.addEventListener("click", function() {
        const min = parseInt(minInput.value, 10);
        const max = parseInt(maxInput.value, 10);

        if (isNaN(min) || isNaN(max) || min >= max) {
            alert("Bitte geben Sie gültige Werte ein (Untere Grenze < Obere Grenze).");
        } else {
            const randomNumber = getRandomNumber(min, max);
            resultSpan.textContent = randomNumber;
        }
    });

    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
});
