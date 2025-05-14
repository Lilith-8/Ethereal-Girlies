document.getElementById('skinQuiz').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const skinType = document.getElementById('skinType').value;
  const skinConcern = document.getElementById('skinConcern').value;
  
  const recommendations = {
    "Oily": {
      "Acne": {
        cleanser: ["Himalaya Neem Face Wash", "https://www.nykaa.com/himalaya-neem-face-wash/p/12345"],
        toner: ["Biotique Cucumber Toner", "https://www.nykaa.com/biotique-cucumber-toner/p/23456"],
        moisturizer: ["Pond's Super Light Gel", "https://www.nykaa.com/ponds-super-light-gel/p/34567"],
        serum: ["Good Vibes Tea Tree Serum", "https://www.nykaa.com/good-vibes-tea-tree-serum/p/45678"],
        sunscreen: ["Lakme Sun Expert SPF 24", "https://www.nykaa.com/lakme-sun-expert-spf24/p/56789"],
        lipBalm: ["Nivea Strawberry Lip Balm", "https://www.nykaa.com/nivea-strawberry-lip-balm/p/67890"]
      }
    },
    "Dry": {
      "Dullness": {
        cleanser: ["Cetaphil Gentle Skin Cleanser", "https://www.nykaa.com/cetaphil-cleanser/p/9999"],
        toner: ["Plum Chamomile Toner", "https://www.nykaa.com/plum-toner/p/8888"],
        moisturizer: ["Nivea Soft Cream", "https://www.nykaa.com/nivea-soft/p/7777"],
        serum: ["Minimalist Vitamin E Serum", "https://www.nykaa.com/minimalist-vitamin-e/p/6666"],
        sunscreen: ["Aqualogica Radiance Dewy Sunscreen", "https://www.nykaa.com/aqualogica-sunscreen/p/5555"],
        lipBalm: ["Himalaya Lip Balm", "https://www.nykaa.com/himalaya-lip-balm/p/4444"]
      }
    },
    "Sensitive": {
      "Redness": {
        cleanser: ["Simple Kind to Skin Refreshing Face Wash", "https://www.nykaa.com/simple-refreshing-wash/p/12121"],
        toner: ["Plum Chamomile & White Tea Toner", "https://www.nykaa.com/plum-chamomile-toner/p/12222"],
        moisturizer: ["Simple Hydrating Light Moisturiser", "https://www.nykaa.com/simple-hydrating-moisturiser/p/12333"],
        serum: ["The Moms Co. Natural Vita-Rich Face Serum", "https://www.nykaa.com/momsco-vitamin-serum/p/12444"],
        sunscreen: ["RE' EQUIL Oxybenzone Free Sunscreen SPF 50", "https://www.nykaa.com/re-equil-sunscreen/p/12555"],
        lipBalm: ["Organic Harvest Strawberry Lip Balm", "https://www.nykaa.com/organic-harvest-lip-balm/p/12666"]
      }
    },
    "Combination": {
      "Dark Spots": {
        cleanser: ["Clean & Clear Foaming Face Wash", "https://www.nykaa.com/clean-and-clear-face-wash/p/13131"],
        toner: ["Good Vibes Rose Glow Toner", "https://www.nykaa.com/good-vibes-rose-toner/p/13232"],
        moisturizer: ["Lakme Peach Milk Moisturizer", "https://www.nykaa.com/lakme-peach-milk/p/13333"],
        serum: ["Biotique Bio Dandelion Serum", "https://www.nykaa.com/biotique-dandelion-serum/p/13444"],
        sunscreen: ["Lotus Herbals Safe Sun SPF 30", "https://www.nykaa.com/lotus-safe-sun/p/13555"],
        lipBalm: ["Maybelline Baby Lips Pink Lolita", "https://www.nykaa.com/maybelline-babylips/p/13666"]
      }
    },
    "Normal": {
      "Aging": {
        cleanser: ["Mamaearth Ubtan Face Wash", "https://www.nykaa.com/mamaearth-ubtan-face-wash/p/14141"],
        toner: ["Khadi Natural Rose Water Toner", "https://www.nykaa.com/khadi-natural-toner/p/14242"],
        moisturizer: ["Joy Revivify Moisturizer", "https://www.nykaa.com/joy-revivify/p/14343"],
        serum: ["Good Vibes Argan Facial Oil", "https://www.nykaa.com/good-vibes-argan-oil/p/14444"],
        sunscreen: ["VLCC Matte Look SPF 30", "https://www.nykaa.com/vlcc-sunscreen/p/14545"],
        lipBalm: ["Elle 18 Juicy Lip Balm", "https://www.nykaa.com/elle18-lip-balm/p/14646"]
      }
    }
  };

  const routine = recommendations[skinType]?.[skinConcern];
  const resultsDiv = document.getElementById('results');

  if (!routine) {
    resultsDiv.innerHTML = `<p>Oops! That combination isn't available yet. We're working on it! Please try again later.</p>`;
    return;
  }

  let resultHTML = `<h2>Your Personalized Skincare Routine</h2><ul style="list-style-type: none; padding-left: 0;">`;
  for (let step in routine) {
    resultHTML += `
      <li style="margin-bottom: 15px;">
        <strong>${step.charAt(0).toUpperCase() + step.slice(1)}:</strong>
        <a href="${routine[step][1]}" target="_blank" style="color: #d8b4dd; text-decoration: none; font-weight: bold;">
          ${routine[step][0]}
        </a>
      </li>
    `;
  }
  resultHTML += `</ul>`;
  resultsDiv.innerHTML = resultHTML;
});
