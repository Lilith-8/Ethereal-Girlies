// Handle the form submission
document.getElementById("quiz-form").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent page reload on submit

  const skinType = document.querySelector('input[name="skin-type"]:checked').value;
  const resultText = document.getElementById("result-text");

  // Show result based on the skin type
  let resultMessage = "";
  if (skinType === "oily") {
    resultMessage = "You have oily skin! Try using oil-free moisturizers and mattifying products.";
  } else if (skinType === "dry") {
    resultMessage = "You have dry skin! Hydrate with moisturizing creams and oils.";
  } else if (skinType === "combination") {
    resultMessage = "You have combination skin! Balance with a mix of moisturizing and mattifying products.";
  } else if (skinType === "sensitive") {
    resultMessage = "You have sensitive skin! Look for gentle, fragrance-free products.";
  }

  // Show the result and hide the quiz
  document.getElementById("result-section").style.display = "block";
  document.getElementById("quiz-form").style.display = "none";
  resultText.textContent = resultMessage;
});

// Retake the quiz
function retakeQuiz() {
  document.getElementById("quiz-form").style.display = "block";
  document.getElementById("result-section").style.display = "none";
  document.getElementById("quiz-form").reset(); // Reset form selection
}
    
