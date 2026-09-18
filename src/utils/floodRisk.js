export function calculateFloodRisk(rainfall, drainageUtilization) {
  if (rainfall >= 70 && drainageUtilization >= 85) {
    return {
      level: "CRITICAL",
      score: 90,
    };
  }

  if (rainfall >= 50 && drainageUtilization >= 70) {
    return {
      level: "HIGH",
      score: 75,
    };
  }

  if (rainfall >= 30 && drainageUtilization >= 50) {
    return {
      level: "MODERATE",
      score: 50,
    };
  }

  return {
    level: "LOW",
    score: 25,
  };
}