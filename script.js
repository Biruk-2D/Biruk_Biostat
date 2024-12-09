const slider = document.getElementById('slider');
const sliderValue = document.getElementById('slider-value');
const result = document.getElementById('result');

function calculateResult(value) {
  return 2 * value + 5; // Example formula
}

slider.addEventListener('input', () => {
  const value = slider.value;
  sliderValue.textContent = value;
  result.textContent = calculateResult(value);
});
