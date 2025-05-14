function showResult() {
    let total = answers.reduce((sum, val) => sum + val, 0);
    let result = "";
    let tips = "";
    let productLink = "";

    if (total <= 2) {
        result = "Dry Skin";
        tips = "Use a gentle, hydrating cleanser. Apply a rich moisturizer and avoid harsh exfoliants.";
        productLink = "https://www.nykaa.com/some-dry-skin-product";  // Replace with actual affiliate link
    } else if (total <= 4) {
        result = "Normal Skin";
        tips = "Keep your routine simple. Use a light moisturizer with SPF and a gentle cleanser.";
        productLink = "https://www.nykaa.com/some-normal-skin-product";  // Replace with actual affiliate link
    } else if (total <= 6) {
        result = "Combination Skin";
        tips = "Use a balanced cleanser and moisturizer. Target dry areas with a richer cream.";
        productLink = "https://www.nykaa.com/some-combination-skin-product";  // Replace with actual affiliate link
    } else {
        result = "Oily Skin";
        tips = "Use a gel-based, oil-free cleanser. Opt for non-comedogenic products to avoid clogged pores.";
        productLink = "https://www.nykaa.com/some-oily-skin-product";  // Replace with actual affiliate link
    }

    quizContainer.innerHTML = `
        <h2>Your Skin Type is: ${result}</h2>
        <p>Skincare Tips for ${result}:</p>
        <ul>
            <li>${tips}</li>
        </ul>
        <p>Explore products for your skin type here: <a href="${productLink}" target="_blank">Shop Now</a></p>
    `;
}
