const { categories, urgencyWords } = require('../config/keywords');

function analyzeTicket(message) {
  const text = message.toLowerCase();

  let category = "Other";
  let maxMatch = 0;
  let keywordsFound = [];

  for (let cat in categories) {
    const matches = categories[cat].filter(word =>
      text.includes(word)
    );

    if (matches.length > maxMatch) {
      maxMatch = matches.length;
      category = cat;
      keywordsFound = matches;
    }
  }

  const urgency = urgencyWords.some(word =>
    text.includes(word)
  );

  if (text.includes("refund")) {
    category = "Billing";
  }

  let priority = "P2";

  if (urgency && category === "Technical") {
    priority = "P0";
  } else if (category === "Billing") {
    priority = "P1";
  } else if (category === "Feature") {
    priority = "P3";
  }

  // Custom priority rule
  if (text.includes("refund")) {
    priority = "P0";
  }

  const confidence = maxMatch === 0 ? 0 : Math.min(1, maxMatch / 3);

  return {
    category,
    priority,
    urgency,
    keywords: keywordsFound,
    confidence
  };
}

module.exports = analyzeTicket;