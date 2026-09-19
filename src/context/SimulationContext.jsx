import {
  createContext,
  useContext,
  useMemo,
  useState,
} from "react";

/* eslint-disable react-refresh/only-export-components */
import {
  generateDrainagePoints,
  processPoints,
  countRisks,
  getOverallRisk,
  buildNowcast,
} from "../utils/floodData";

const DEFAULT_RAINFALL = 40;

const SimulationContext = createContext(null);

export function SimulationProvider({ children }) {

  const [rainfall, setRainfall] = useState(DEFAULT_RAINFALL);

  // The 50 demo drainage points are generated once.
  const drainagePoints = useMemo(
    () => generateDrainagePoints(),
    []
  );

  const value = useMemo(() => {

    const points = processPoints(drainagePoints, rainfall);

    const riskCounts = countRisks(points);

    const maximumUtilization = Math.max(
      ...points.map((point) => point.adjustedUtilization)
    );

    const overallRisk = getOverallRisk(riskCounts);

    const topRiskLocations = [...points]
      .sort(
        (a, b) => b.adjustedUtilization - a.adjustedUtilization
      )
      .slice(0, 5);

    return {
      rainfall,

      setRainfall: (next) =>
        setRainfall(
          Math.max(0, Math.min(150, Number(next) || 0))
        ),

      resetRainfall: () => setRainfall(DEFAULT_RAINFALL),

      drainagePoints,
      processedPoints: points,
      riskCounts,
      maximumUtilization,
      overallRisk,
      topRiskLocations,
      nowcast: buildNowcast(rainfall, maximumUtilization),

      highOrCritical: riskCounts.HIGH + riskCounts.CRITICAL,
      totalPoints: points.length,
    };

  }, [rainfall, drainagePoints]);

  return (
    <SimulationContext.Provider value={value}>
      {children}
    </SimulationContext.Provider>
  );
}

export function useSimulation() {
  const ctx = useContext(SimulationContext);

  if (!ctx) {
    throw new Error(
      "useSimulation must be used inside <SimulationProvider>"
    );
  }

  return ctx;
}
