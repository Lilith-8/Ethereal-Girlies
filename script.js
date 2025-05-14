// Handle the form submission
document.getElementById("quiz-form").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent page reload on submit

  const skinType = document.querySelector('input[name="skin-type"]:checked').value;
  const resultText = document.getElementById("result-text");
  const productRecommendations = document.getElementById("product-recommendations");

  // Show result and product recommendations based on the skin type
  let resultMessage = "";
  let products = "";

  if (skinType === "oily") {
    resultMessage = "You have oily skin! Try using oil-free moisturizers and mattifying products.";
    products = `
      <ul>
        <li><a href="https://www.nykaa.com/nykaa-skin-omega-oil-free-moisturizer">Nykaa Omega Oil-Free Moisturizer</a></li>
        <li><a href="https://www.nykaa.com/clinique-oily-skin-set">Clinique Oily Skin Set</a></li>
        <li><a href="https://www.nykaa.com/lancome-mattifying-cream">Lancôme Mattifying Cream</a></li>
      </ul>
    `;
  } else if (skinType === "dry") {
    resultMessage = "You have dry skin! Hydrate with moisturizing creams and oils.";
    products = `
      <ul>
        <li><a href="https://www.nykaa.com/biotique-bio-wheatgerm-cream">Biotique Wheatgerm Cream</a></li>
        <li><a href="https://www.nykaa.com/clinique-moisture-surge">Clinique Moisture Surge</a></li>
        <li><a href="https://www.nykaa.com/lush-breath-of-fresh-air">Lush Breath of Fresh Air Toner</a></li>
      </ul>
    `;
  } else if (skinType === "combination") {
    resultMessage = "You have combination skin! Balance with a mix of moisturizing and mattifying products.";
    products = `
      <ul>
        <li><a href="https://www.nykaa.com/mamart-himalaya-refresh-toner">Mamaearth Refresh Toner</a></li>
        <li><a href="https://www.nykaa.com/the-body-shop-tea-tree-oil">The Body Shop Tea Tree Oil</a></li>
        <li><a href="https://www.nykaa.com/nivea-soft-cream">Nivea Soft Cream</a></li>
      </ul>
    `;
  } else if (skinType === "sensitive") {
    resultMessage = "You have sensitive skin! Look for gentle, fragrance-free products.";
    products = `
      <ul>
        <li><a href="https://www.nykaa.com/cerave-hydrating-cleanser">CeraVe Hydrating Cleanser</a></li>
        <li><a href="https://www.nykaa.com/aqualogica-skin-dewy-sunscreen">Aqualogica Skin Dewy Sunscreen</a></li>
        <li><a href="https://www.nykaa.com/avene-cicalfate-cream">Avène Cicalfate Restorative Cream</a></li>
      </ul>
    `;
  }

  // Show the result and hide the quiz
  document.getElementById("result-section").style.display = "block";
  document.getElementById("quiz-form").style.display = "none";
  resultText.textContent = resultMessage;
  productRecommendations.innerHTML = products; // Display product links

});

// Retake the quiz
function retakeQuiz() {
  document.getElementById("quiz-form").style.display = "block";
  document.getElementById("result-section").style.display = "none";
  document.getElementById("quiz-form").reset(); // Reset form selection
}
