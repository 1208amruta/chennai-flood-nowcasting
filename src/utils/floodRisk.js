export function calculateFloodRisk(rainfall, drainageUtilization) {
  const rainfallScore = Math.min(
    100,
    (rainfall / 120) * 100
  );

  const drainageScore = Math.min(
    100,
    drainageUtilization
  );

  const score = Math.round(
    rainfallScore * 0.45 +
    drainageScore * 0.55
  );

  if (score >= 75) {
    return {
      level: "CRITICAL",
      score,
    };
  }

  if (score >= 55) {
    return {
      level: "HIGH",
      score,
    };
  }

  if (score >= 35) {
    return {
      level: "MODERATE",
      score,
    };
  }

  return {
    level: "LOW",
    score,
  };
}