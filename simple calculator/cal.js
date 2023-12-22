// Function to add a value to the display
function addToDisplay(value) {
    // Get the current value in the display and append the new value
    document.getElementById('display').value += value;
}

// Function to clear the display
function clearDisplay() {
    // Set the display value to an empty string
    document.getElementById('display').value = '';
}

// Function to perform the calculation
function calculate() {
    try {
        // Use the Function constructor to evaluate the expression in the display
        const result = Function('return ' + document.getElementById('display').value)();
        // Display the result in the input field
        document.getElementById('display').value = result;
    } catch (error) {
        // If an error occurs during calculation, display 'Error'
        document.getElementById('display').value = 'Error';
    }
}
