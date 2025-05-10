function calculateBMI() {
  const heightCm = parseFloat(document.getElementById("height").value);
  const weightKg = parseFloat(document.getElementById("weight").value);

  // Validation
  if (isNaN(heightCm) || isNaN(weightKg) || heightCm <= 0 || weightKg <= 0) {
    document.getElementById("result").innerText =
      "Please enter valid height and weight values.";
    document.getElementById("result").style.color = "#e74c3c";
    return;
  }

  // Calculate BMI
  const heightM = heightCm / 100;
  const bmi = weightKg / (heightM * heightM);
  const bmiRounded = bmi.toFixed(1);

  // Determine category
  let category = "";
  let color = "";

  if (bmi < 18.5) {
    category = "Underweight";
    color = "#3498db"; // Blue
  } else if (bmi >= 18.5 && bmi < 25) {
    category = "Normal weight";
    color = "#2ecc71"; // Green
  } else if (bmi >= 25 && bmi < 30) {
    category = "Overweight";
    color = "#f39c12"; // Orange
  } else {
    category = "Obese";
    color = "#e74c3c"; // Red
  }

  // Display result
  const resultElement = document.getElementById("result");
  resultElement.innerHTML = `Your BMI is <span style="color: ${color}">${bmiRounded}</span> (${category})`;
  resultElement.style.color = "#ecf0f1";
}
