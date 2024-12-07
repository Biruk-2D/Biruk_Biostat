// DOM Elements
const slider = document.getElementById('slider');
const sliderValue = document.getElementById('slider-value');
const yValue = document.getElementById('y-value');
const y1Value = document.getElementById('y1-value');
const y2Value = document.getElementById('y2-value');

// Formulas
function calculateY(X) {
    return (0.299 * X + 1.921).toFixed(2); // Main formula
}

function calculateY1(X) {
    return (0.270 * X + 1.120).toFixed(2); // Lower bound
}

function calculateY2(X) {
    return (0.327 * X + 2.721).toFixed(2); // Upper bound
}

// Function to calculate and update results
function updateResults() {
    const X = parseFloat(slider.value); // Slider value
    sliderValue.textContent = X; // Display slider value

    // Calculate and update results
    yValue.textContent = calculateY(X);
    y1Value.textContent = calculateY1(X);
    y2Value.textContent = calculateY2(X);

    // Update slider appearance
    const percentage = (X / slider.max) * 100; // Calculate percentage
    slider.style.background = `linear-gradient(to right, blue ${percentage}%, #ddd ${percentage}%)`;
    slider.style.height = `${10 + (percentage / 10)}px`; // Make the slider thicker as it moves
}

// Event Listener
slider.addEventListener('input', updateResults);

// Initial Calculation
updateResults();
