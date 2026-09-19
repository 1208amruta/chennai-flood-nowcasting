// =========================================================
// SHARED FLOOD SIMULATION DATA + LOGIC
// Moved out of FloodMapComponent so every page can use the
// SAME calculated values (no hard-coded demo numbers).
// The maths below is unchanged from the original project.
// =========================================================

import { calculateFloodRisk } from "./floodRisk";


// =========================================================
// LOCATION
// =========================================================

export const velacheryPosition = [12.9784, 80.2209];


// =========================================================
// APPROXIMATE DEMO BOUNDARY
// =========================================================

export const velacheryBoundary = [
  [12.9970, 80.2050],
  [12.9990, 80.2170],
  [12.9940, 80.2290],
  [12.9870, 80.2370],
  [12.9760, 80.2390],
  [12.9650, 80.2320],
  [12.9600, 80.2200],
  [12.9610, 80.2080],
  [12.9680, 80.2010],
  [12.9800, 80.1980],
  [12.9900, 80.2010],
];


// =========================================================
// RAINFALL POINTS
// =========================================================

export const rainfallPoints = [
  {
    id: "RF-01",
    name: "Velachery Main Road",
    position: [12.9818, 80.2186],
  },
  {
    id: "RF-02",
    name: "Taramani Link Road",
    position: [12.9847, 80.2280],
  },
  {
    id: "RF-03",
    name: "Vijayanagar",
    position: [12.9738, 80.2154],
  },
  {
    id: "RF-04",
    name: "Dhandeeswaram",
    position: [12.9721, 80.2231],
  },
];


// =========================================================
// DEMO DRAINAGE CORRIDORS
// Approximate project data
// =========================================================

export const corridorDefinitions = [
  {
    name: "Velachery Main Road",
    start: [12.9930, 80.2140],
    end: [12.9650, 80.2260],
  },

  {
    name: "Taramani Link Road",
    start: [12.9900, 80.2260],
    end: [12.9730, 80.2330],
  },

  {
    name: "Vijayanagar Corridor",
    start: [12.9810, 80.2070],
    end: [12.9660, 80.2170],
  },

  {
    name: "100 Feet Road Corridor",
    start: [12.9880, 80.2070],
    end: [12.9700, 80.2110],
  },

  {
    name: "Tansi Nagar Corridor",
    start: [12.9890, 80.2200],
    end: [12.9680, 80.2300],
  },

  {
    name: "Baby Nagar Corridor",
    start: [12.9810, 80.2240],
    end: [12.9680, 80.2340],
  },

  {
    name: "Velachery West Corridor",
    start: [12.9940, 80.2040],
    end: [12.9760, 80.2090],
  },

  {
    name: "Dhandeeswaram Corridor",
    start: [12.9790, 80.2180],
    end: [12.9650, 80.2220],
  },

  {
    name: "VGP Selva Nagar Corridor",
    start: [12.9860, 80.2310],
    end: [12.9720, 80.2350],
  },

  {
    name: "Inner Drainage Corridor",
    start: [12.9870, 80.2160],
    end: [12.9700, 80.2250],
  },
];


// =========================================================
// GENERATE 50 DEMO POINTS
// =========================================================

export const pipeSizes = ["Small", "Medium", "Large"];

export const baseUtilizations = [
  34,
  42,
  51,
  47,
  58,
];

export const generateDrainagePoints = () => {
  const points = [];

  corridorDefinitions.forEach((corridor, corridorIndex) => {

    for (let i = 0; i < 5; i++) {

      const progress = i / 4;

      const lat =
        corridor.start[0] +
        (corridor.end[0] - corridor.start[0]) *
          progress;

      const lng =
        corridor.start[1] +
        (corridor.end[1] - corridor.start[1]) *
          progress;

      const pipeSize =
        pipeSizes[(corridorIndex + i) % 3];

      const capacity =
        pipeSize === "Small"
          ? 45
          : pipeSize === "Medium"
          ? 65
          : 85;

      const utilization =
        baseUtilizations[
          (corridorIndex + i) %
            baseUtilizations.length
        ];

      points.push({
        id: `DR-${String(points.length + 1).padStart(2, "0")}`,

        name: `${corridor.name} Point ${i + 1}`,

        road: corridor.name,

        position: [lat, lng],

        pipeSize,

        capacity,

        utilization,
      });
    }
  });

  return points;
};


// =========================================================
// RISK COLORS
// =========================================================

export const getRiskColor = (level) => {

  if (level === "CRITICAL") {
    return "#ef4444";
  }

  if (level === "HIGH") {
    return "#f97316";
  }

  if (level === "MODERATE") {
    return "#eab308";
  }

  return "#22c55e";
};

// =========================================================
// RAINFALL -> DRAINAGE UTILIZATION -> RISK
// (identical to the original FloodMapComponent logic)
// =========================================================

export const processPoints = (drainagePoints, rainfall) => {

  return drainagePoints.map((point) => {

    let rainfallLoad;

    if (rainfall <= 30) {
      rainfallLoad = rainfall * 0.18;
    } else if (rainfall <= 60) {
      rainfallLoad = rainfall * 0.35;
    } else if (rainfall <= 90) {
      rainfallLoad = rainfall * 0.58;
    } else if (rainfall <= 120) {
      rainfallLoad = rainfall * 0.82;
    } else {
      rainfallLoad = rainfall * 1.05;
    }

    const pipeFactor = 100 / point.capacity;

    const adjustedUtilization = Math.min(
      100,
      Math.round(
        point.utilization + rainfallLoad * pipeFactor
      )
    );

    const risk = calculateFloodRisk(
      rainfall,
      adjustedUtilization
    );

    return {
      ...point,
      adjustedUtilization,
      risk,
    };
  });
};


export const countRisks = (processedPoints) => ({
  LOW: processedPoints.filter((p) => p.risk.level === "LOW").length,
  MODERATE: processedPoints.filter((p) => p.risk.level === "MODERATE").length,
  HIGH: processedPoints.filter((p) => p.risk.level === "HIGH").length,
  CRITICAL: processedPoints.filter((p) => p.risk.level === "CRITICAL").length,
});


export const getOverallRisk = (riskCounts) =>
  riskCounts.CRITICAL > 0
    ? "CRITICAL"
    : riskCounts.HIGH > 0
    ? "HIGH"
    : riskCounts.MODERATE > 0
    ? "MODERATE"
    : "LOW";


// Nowcast: NOW / +1h / +2h / +3h
export const buildNowcast = (rainfall, maximumUtilization) => {

  const steps = [
    { key: "now", time: "Now", factor: 1, extra: 0 },
    { key: "h1", time: "+1 Hour", factor: 1.1, extra: 5 },
    { key: "h2", time: "+2 Hours", factor: 1.2, extra: 10 },
    { key: "h3", time: "+3 Hours", factor: 1.3, extra: 15 },
  ];

  return steps.map((step) => {

    const stepRainfall = Math.round(rainfall * step.factor);

    const drainage = Math.min(
      100,
      maximumUtilization + step.extra
    );

    return {
      key: step.key,
      time: step.time,
      rainfall: stepRainfall,
      drainage,
      risk: calculateFloodRisk(stepRainfall, drainage),
    };
  });
};
