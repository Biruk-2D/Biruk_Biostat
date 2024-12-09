// DOM Elements
const slider = document.getElementById('slider');
const sliderValue = document.getElementById('slider-value');
const yValue = document.getElementById('y-value');
const y1Value = document.getElementById('y1-value');
const y2Value = document.getElementById('y2-value');
const pieChartCanvas = document.getElementById('pie-chart');
const ctx = pieChartCanvas.getContext('2d');

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
    const y = calculateY(X);
    const y1 = calculateY1(X);
    const y2 = calculateY2(X);

    yValue.textContent = y;
    y1Value.textContent = y1;
    y2Value.textContent = y2;

    // Update Pie Chart
    updatePieChart(y, y1, y2);
}

// Function to Update Pie Chart
function updatePieChart(y, y1, y2) {
    const total = parseFloat(y) + (100 - parseFloat(y));
    const lowerMargin = parseFloat(y1);
    const upperMargin = parseFloat(y2);

    // Clear Canvas
    ctx.clearRect(0, 0, pieChartCanvas.width, pieChartCanvas.height);

    // Main Slice
    ctx.beginPath();
    ctx.arc(150, 150, 100, 0, (y / total) * 2 * Math.PI);
    ctx.lineTo(150, 150);
    ctx.fillStyle = '#007BFF';
    ctx.fill();
    ctx.closePath();

    // Lower Bound Margin Slice
    ctx.beginPath();
    ctx.arc(150, 150, 100, (y / total) * 2 * Math.PI, (lowerMargin / total) * 2 * Math.PI);
    ctx.lineTo(150, 150);
    ctx.fillStyle = '#99ccff';
    ctx.fill();
    ctx.closePath();

    // Upper Bound Margin Slice
    ctx.beginPath();
    ctx.arc(150, 150, 100, (lowerMargin / total) * 2 * Math.PI, (upperMargin / total) * 2 * Math.PI);
    ctx.lineTo(150, 150);
    ctx.fillStyle = '#cce6ff';
    ctx.fill();
    ctx.closePath();
}

// Event Listener
slider.addEventListener('input', updateResults);

// Initial Calculation
updateResults();
