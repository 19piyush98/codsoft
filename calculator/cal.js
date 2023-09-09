let display = document.getElementById("display");
let currentInput = "";
let result = "";

function addToDisplay(value) {
    currentInput += value;
    display.value = currentInput;
}

function clearDisplay() {
    currentInput = "";
    display.value = "";
}

function calculateResult() {
    try {
        result = eval(currentInput);
        display.value = result;
        currentInput = result.toString();
    } catch (error) {
        display.value = "Error";
        currentInput = "";
    }
}
