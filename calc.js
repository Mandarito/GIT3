function addToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    let displayValue = document.getElementById('display').value;
    let result = eval(displayValue); // Using eval for simplicity (not recommended for production)
    document.getElementById('display').value = result;
}
