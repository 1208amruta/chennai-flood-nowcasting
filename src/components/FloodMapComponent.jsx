
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Circle,
  CircleMarker,
  Polygon,
} from "react-leaflet";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import {
  CloudRain,
  Waves,
  AlertTriangle,
  Activity,
  RotateCcw,
} from "lucide-react";

import "leaflet/dist/leaflet.css";

import L from "leaflet";

import {
  velacheryPosition,
  velacheryBoundary,
  rainfallPoints,
  getRiskColor,
} from "../utils/floodData";

import { useLanguage } from "../i18n/LanguageContext";
import { useSimulation } from "../context/SimulationContext";


// =========================================================
// LEAFLET ICON
// =========================================================

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",

  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",

  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
});


// =========================================================
// MAIN COMPONENT
// =========================================================

function FloodMapComponent() {

  const { t, tRisk, tPipe } = useLanguage();

  // Rainfall + all derived values come from the shared
  // simulation state, so every page shows the same numbers.
  const {
    rainfall,
    setRainfall,
    resetRainfall,
    processedPoints,
    riskCounts,
    maximumUtilization,
    overallRisk,
    topRiskLocations,
    nowcast,
  } = useSimulation();

  const nowcastData = nowcast;

  const nowcastResults = nowcast.map((item) => item.risk);


  return (
    <div className="map-wrapper">

      {/* =================================================
          CURRENT STATUS
      ================================================= */}

      <div className="live-status-panel">

        <div className="live-status-left">

          <div className="live-status-icon">
            <CloudRain size={22} />
          </div>

          <div>
            <span>{t("map.currentRainfall")}</span>

            <strong>
              {rainfall} {t("common.unitMmHr")}
            </strong>
          </div>

        </div>


        <div className="live-status-item">

          <span>{t("common.floodRisk")}</span>

          <strong
            className={`status-${overallRisk.toLowerCase()}`}
          >
            {tRisk(overallRisk)}
          </strong>

        </div>


        <div className="live-status-item">

          <span>{t("map.peakDrainage")}</span>

          <strong>
            {maximumUtilization}%
          </strong>

        </div>


        <div className="simulation-indicator">
          ● {t("map.simulationTag")}
        </div>

      </div>


      {/* =================================================
          RISK DISTRIBUTION
      ================================================= */}

      <div className="risk-summary">

        <div className="risk-summary-header">

          <div>
            <h2>{t("map.riskDistribution")}</h2>

            <p>
              {t("map.riskDistributionSub")}
            </p>
          </div>

          <div className="overall-risk-chip">
            Overall: {tRisk(overallRisk)}
          </div>

        </div>


        <div className="risk-grid">

          <div className="risk-card risk-low">
            <span>🟢 {tRisk("LOW")}</span>
            <strong>{riskCounts.LOW}</strong>
            <small>{t("common.locations")}</small>
          </div>

          <div className="risk-card risk-moderate">
            <span>🟡 {tRisk("MODERATE")}</span>
            <strong>{riskCounts.MODERATE}</strong>
            <small>{t("common.locations")}</small>
          </div>

          <div className="risk-card risk-high">
            <span>🟠 {tRisk("HIGH")}</span>
            <strong>{riskCounts.HIGH}</strong>
            <small>{t("common.locations")}</small>
          </div>

          <div className="risk-card risk-critical">
            <span>🔴 {tRisk("CRITICAL")}</span>
            <strong>{riskCounts.CRITICAL}</strong>
            <small>{t("common.locations")}</small>
          </div>

        </div>


        <div className="monitoring-stats">

          <div>
            <span>{t("map.currentRainfall")}</span>

            <strong>
              {rainfall} {t("common.unitMmHr")}
            </strong>
          </div>

          <div>
            <span>{t("map.maxUtilization")}</span>

            <strong>
              {maximumUtilization}%
            </strong>
          </div>

          <div>
            <span>{t("map.monitoringPoints")}</span>

            <strong>
              50
            </strong>
          </div>

        </div>


        <div className="pipe-summary">

          <span className="small-pipe">
            {tPipe("Small")}:{" "}
            {
              processedPoints.filter(
                (p) =>
                  p.pipeSize === "Small"
              ).length
            }
          </span>

          <span className="medium-pipe">
            {tPipe("Medium")}:{" "}
            {
              processedPoints.filter(
                (p) =>
                  p.pipeSize === "Medium"
              ).length
            }
          </span>

          <span className="large-pipe">
            {tPipe("Large")}:{" "}
            {
              processedPoints.filter(
                (p) =>
                  p.pipeSize === "Large"
              ).length
            }
          </span>

        </div>


        <div className="pipe-capacity-legend">

          <div className="pipe-capacity-item small">
            <span className="pipe-bar" aria-hidden="true"></span>
            <strong>{tPipe("Small")}</strong>
            <small>{t("pipes.smallNote")}</small>
          </div>

          <div className="pipe-capacity-item medium">
            <span className="pipe-bar" aria-hidden="true"></span>
            <strong>{tPipe("Medium")}</strong>
            <small>{t("pipes.mediumNote")}</small>
          </div>

          <div className="pipe-capacity-item large">
            <span className="pipe-bar" aria-hidden="true"></span>
            <strong>{tPipe("Large")}</strong>
            <small>{t("pipes.largeNote")}</small>
          </div>

          <p className="pipe-capacity-note">
            {t("pipes.explain")}
          </p>

        </div>


        <div className="demo-warning">

          ⚠ {t("map.demoWarning")}

        </div>

      </div>


      {/* =================================================
          NOWCAST
      ================================================= */}

      <div className="nowcast-panel">

        <div className="section-heading">

          <div>
            <h3>
              {t("map.nowcastTitle")}
            </h3>

            <p>
              {t("map.nowcastSub")}
            </p>
          </div>

          <span>
            {t("common.next3Hours")}
          </span>

        </div>


        <div className="nowcast-grid">

          {nowcastResults.map(
            (result, index) => {

              const level =
                result.level.toLowerCase();

              return (
                <div
                  key={nowcastData[index].time}
                  className={`nowcast-card ${level}`}
                >

                  <span>
                    {t(`nowcast.${nowcastData[index].key}`)}
                  </span>

                  <strong>
                    {tRisk(result.level)}
                  </strong>

                  <small>
                    {t("popup.score")} {result.score}/100
                  </small>

                  <div className="forecast-details">

                    <span>
                      🌧 {nowcastData[index].rainfall} {t("common.unitMmHr")}
                    </span>

                    <span>
                      🚰 {nowcastData[index].drainage}%
                    </span>

                  </div>

                </div>
              );
            }
          )}

        </div>


        {/* TREND */}
        <div className="nowcast-info">

          <span>
            🌧 {t("map.rainfallTrend")}
          </span>

          <strong>
            {t("map.increasing")} ↗
          </strong>

          <span>
            🚰 {t("map.drainageStress")}
          </span>

          <strong>
            {t("map.increasing")} ↗
          </strong>

        </div>


        {/* CHART */}
        <div className="rainfall-chart">

          <h3>
            🌧 {t("map.chartTitle")}
          </h3>

          <p>
            {t("map.chartSub")}
          </p>

          <ResponsiveContainer
            width="100%"
            height={270}
          >

            <LineChart
              data={nowcastData}
            >

              <CartesianGrid
                strokeDasharray="3 3"
              />

              <XAxis
                dataKey="time"
              />

              <YAxis
                unit=" mm/hr"
              />

              <Tooltip />

              <Line
                type="monotone"
                dataKey="rainfall"
                stroke="#0284c7"
                strokeWidth={3}
                dot={{ r: 5 }}
              />

            </LineChart>

          </ResponsiveContainer>

        </div>

      </div>


      {/* =================================================
          RAINFALL CONTROL
      ================================================= */}

      <div className="rainfall-control">

        <div className="rainfall-control-header">

          <div className="rainfall-control-title">

            <div className="control-icon">
              <CloudRain size={22} />
            </div>

            <div>
              <h3>
                {t("map.controlTitle")}
              </h3>

              <p>
                {t("map.controlSub")}
              </p>
            </div>

          </div>


          <div className="rainfall-value">

            <input
              type="number"
              aria-label={t("map.rainfallInputLabel")}
              min="0"
              max="150"
              value={rainfall}
              onChange={(e) =>
                setRainfall(
                  Math.max(
                    0,
                    Math.min(
                      150,
                      Number(e.target.value)
                    )
                  )
                )
              }
            />

            <strong>
              {t("common.unitMmHr")}
            </strong>

            <button
              onClick={resetRainfall}
              title={t("map.resetTitle")}
              aria-label={t("map.resetTitle")}
            >
              <RotateCcw size={15} />
              {t("map.reset")}
            </button>

          </div>

        </div>


        <input
          className="rainfall-slider"
          type="range"
          aria-label={t("map.rainfallSliderLabel")}
          min="0"
          max="150"
          value={rainfall}
          onChange={(e) =>
            setRainfall(
              Number(e.target.value)
            )
          }
        />


        <div className="slider-labels">
          <span>0 mm/hr</span>
          <span>50</span>
          <span>100</span>
          <span>150 mm/hr</span>
        </div>


        <div className="risk-scale">

          <span className="scale-low">
            🟢 {tRisk("LOW")}
          </span>

          <span className="scale-moderate">
            🟡 {tRisk("MODERATE")}
          </span>

          <span className="scale-high">
            🟠 {tRisk("HIGH")}
          </span>

          <span className="scale-critical">
            🔴 {tRisk("CRITICAL")}
          </span>

        </div>

      </div>


      {/* =================================================
          MAP
      ================================================= */}

      <div className="map-container-card">

        <div className="map-header">

          <div>
            <div className="map-title-row">

              <div className="map-title-icon">
                <Activity size={19} />
              </div>

              <div>
                <h2>
                  {t("map.mapTitle")}
                </h2>

                <p>
                  {t("map.mapSub")}
                </p>
              </div>

            </div>
          </div>


          <div className="map-live-badge">
            ● {t("map.simulationActive")}
          </div>

        </div>


        <div className="map-canvas">

          <MapContainer
            center={velacheryPosition}
            zoom={14}
            scrollWheelZoom={true}
            style={{
              height: "620px",
              width: "100%",
            }}
          >

            <TileLayer
              attribution="&copy; OpenStreetMap contributors"
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />


            {/* VELACHERY BOUNDARY */}

            <Polygon
              positions={velacheryBoundary}
              pathOptions={{
                color: "#0284c7",
                weight: 3,
                dashArray: "8 6",
                fillColor: "#0284c7",
                fillOpacity: 0.04,
              }}
            />


            {/* RAINFALL POINTS */}

            {rainfallPoints.map(
              (point) => (

                <Marker
                  key={point.id}
                  position={point.position}
                >

                  <Popup>

                    <strong>
                      🌧 {t("map.rainfallPoint")}
                    </strong>

                    <br />

                    {point.name}

                    <br />
                    <br />

                    <strong>
                      {t("map.simulationRainfall")}
                    </strong>{" "}
                    {rainfall} {t("common.unitMmHr")}

                    <br />

                    <small>
                      {t("map.projectData")}
                    </small>

                  </Popup>

                </Marker>

              )
            )}


            {/* DYNAMIC RISK AREAS */}

            {processedPoints.map(
              (point) => {

                const color =
                  getRiskColor(
                    point.risk.level
                  );

                const radius =
                  point.risk.level ===
                  "CRITICAL"
                    ? 150
                    : point.risk.level ===
                      "HIGH"
                    ? 120
                    : point.risk.level ===
                      "MODERATE"
                    ? 95
                    : 70;

                return (
                  <div key={point.id}>

                    <Circle
                      center={point.position}
                      radius={radius}
                      pathOptions={{
                        color,
                        fillColor: color,
                        fillOpacity: 0.12,
                        weight: 1,
                      }}
                    />

                    <CircleMarker
                      center={point.position}
                      radius={6}
                      pathOptions={{
                        color: "#ffffff",
                        weight: 2,
                        fillColor: color,
                        fillOpacity: 1,
                      }}
                    >

                      <Popup>

                        <div className="map-popup">

                          <h3>
                            {point.risk.level ===
                            "CRITICAL"
                              ? "🔴"
                              : point.risk.level ===
                                "HIGH"
                              ? "🟠"
                              : point.risk.level ===
                                "MODERATE"
                              ? "🟡"
                              : "🟢"}{" "}
                            {t("map.drainageMonitoring")}
                          </h3>

                          <strong>
                            {point.id}
                          </strong>

                          <br />

                          {point.name}

                          <hr />

                          <div>
                            <strong>
                              {t("popup.road")}
                            </strong>{" "}
                            {point.road}
                          </div>

                          <div>
                            <strong>
                              {t("popup.pipe")}
                            </strong>{" "}
                            {tPipe(point.pipeSize)}
                          </div>

                          <div>
                            <strong>
                              {t("popup.capacity")}
                            </strong>{" "}
                            {point.capacity}%
                          </div>

                          <div>
                            <strong>
                              {t("popup.rainfall")}
                            </strong>{" "}
                            {rainfall} {t("common.unitMmHr")}
                          </div>

                          <div>
                            <strong>
                              {t("popup.utilization")}
                            </strong>{" "}
                            {point.adjustedUtilization}%
                          </div>

                          <div>
                            <strong>
                              {t("popup.remaining")}
                            </strong>{" "}
                            {100 -
                              point.adjustedUtilization}
                            %
                          </div>

                          <div>
                            <strong>
                              {t("popup.risk")}
                            </strong>{" "}
                            {tRisk(point.risk.level)}
                          </div>

                          <div>
                            <strong>
                              {t("popup.score")}
                            </strong>{" "}
                            {point.risk.score}/100
                          </div>

                          {point.adjustedUtilization >=
                            90 && (
                            <p
                              style={{
                                color:
                                  "#dc2626",
                                fontWeight:
                                  700,
                              }}
                            >
                              ⚠ {t("map.overflowWarning")}
                            </p>
                          )}

                        </div>

                      </Popup>

                    </CircleMarker>

                  </div>
                );
              }
            )}


            {/* LEGEND */}

            <div className="map-legend">

              <div className="legend-title">
                {t("common.floodRisk")}
              </div>

              <div className="legend-item">
                <span className="legend-color low"></span>
                {tRisk("LOW")}
              </div>

              <div className="legend-item">
                <span className="legend-color moderate"></span>
                {tRisk("MODERATE")}
              </div>

              <div className="legend-item">
                <span className="legend-color high"></span>
                {tRisk("HIGH")}
              </div>

              <div className="legend-item">
                <span className="legend-color critical"></span>
                {tRisk("CRITICAL")}
              </div>

              <hr />

              <div className="legend-title">
                {t("map.legendPipe")}
              </div>

              <div className="legend-item">
                <span className="legend-pipe small"></span>
                {tPipe("Small")} — {t("pipes.smallNote")}
              </div>

              <div className="legend-item">
                <span className="legend-pipe medium"></span>
                {tPipe("Medium")} — {t("pipes.mediumNote")}
              </div>

              <div className="legend-item">
                <span className="legend-pipe large"></span>
                {tPipe("Large")} — {t("pipes.largeNote")}
              </div>

              <hr />

              <div className="legend-item">
                🔵 {t("map.boundary")}
              </div>

              <div className="legend-item">
                🌧 {t("map.rainfallPointShort")}
              </div>

              <div className="legend-item">
                ● {t("map.drainagePointShort")}
              </div>

              <div className="legend-demo">
                {t("map.legendDemo")}
              </div>

            </div>

          </MapContainer>


          {/* MAP OVERLAY */}

          <div className="map-overlay">

            <div className="overlay-title">
              {t("map.currentFloodStatus")}
            </div>

            <div
              className={`overlay-risk ${overallRisk.toLowerCase()}`}
            >
              {tRisk(overallRisk)}
            </div>

            <div className="overlay-details">

              <span>
                🌧 {rainfall} {t("common.unitMmHr")}
              </span>

              <span>
                🚰 {maximumUtilization}% drainage
              </span>

            </div>

          </div>

        </div>

      </div>


      {/* =================================================
          WHY RISK IS CHANGING
      ================================================= */}

      <div className="why-risk-section">

        <div className="section-heading">

          <div>
            <h2>
              {t("map.whyTitle")}
            </h2>

            <p>
              {t("map.whySub")}
            </p>
          </div>

        </div>


        <div className="risk-factor-grid">

          <div className="risk-factor">

            <div className="factor-icon rainfall">
              <CloudRain size={21} />
            </div>

            <div className="factor-content">

              <div>
                <span>
                  {t("map.factorRainfall")}
                </span>

                <strong>
                  {rainfall} {t("common.unitMmHr")}
                </strong>
              </div>

              <div className="factor-bar">
                <div
                  style={{
                    width: `${Math.min(
                      100,
                      (rainfall / 120) *
                        100
                    )}%`,
                  }}
                ></div>
              </div>

              <div className="factor-description">
                {t("map.factorRainfallText")}
              </div>

            </div>

          </div>


          <div className="risk-factor">

            <div className="factor-icon drainage">
              <Waves size={21} />
            </div>

            <div className="factor-content">

              <div>
                <span>
                  {t("map.factorDrainage")}
                </span>

                <strong>
                  {maximumUtilization}%
                </strong>
              </div>

              <div className="factor-bar">
                <div
                  style={{
                    width: `${maximumUtilization}%`,
                  }}
                ></div>
              </div>

              <div className="factor-description">
                {t("map.factorDrainageText")}
              </div>

            </div>

          </div>


          <div className="risk-factor">

            <div className="factor-icon risk">
              <AlertTriangle size={21} />
            </div>

            <div className="factor-content">

              <div>
                <span>
                  {t("map.criticalLocations")}
                </span>

                <strong>
                  {riskCounts.CRITICAL}
                </strong>
              </div>

              <div className="factor-description">
                {t("map.criticalLocationsText")}
              </div>

            </div>

          </div>

        </div>

      </div>


      {/* =================================================
          TOP RISK LOCATIONS
      ================================================= */}

      <div className="top-risk-section">

        <div className="section-heading">

          <div>
            <h2>
              {t("map.topRiskTitle")}
            </h2>

            <p>
              {t("map.topRiskSub")}
            </p>
          </div>

        </div>


        <div className="top-risk-list">

          {topRiskLocations.map(
            (point, index) => (

              <div
                className="top-risk-row"
                key={point.id}
              >

                <div className="risk-rank">
                  #{index + 1}
                </div>

                <div className="top-risk-name">

                  <strong>
                    {point.id}
                  </strong>

                  <span>
                    {point.road}
                  </span>

                </div>

                <div className="top-risk-pipe">
                  {tPipe(point.pipeSize)}
                </div>

                <div className="top-risk-utilization">

                  <strong>
                    {point.adjustedUtilization}%
                  </strong>

                  <span>
                    {t("map.utilization")}
                  </span>

                </div>

                <div
                  className={`risk-badge ${point.risk.level.toLowerCase()}`}
                >
                  {tRisk(point.risk.level)}
                </div>

              </div>

            )
          )}

        </div>

      </div>

    </div>
  );
}

export default FloodMapComponent;