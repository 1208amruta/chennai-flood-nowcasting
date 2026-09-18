import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Circle,
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

import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { calculateFloodRisk } from "../utils/floodRisk";

// Fix Leaflet marker icons
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",

  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",

  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
});

// Rainfall marker
const rainfallIcon = L.divIcon({
  className: "rainfall-marker",
  html: "🌧️",
  iconSize: [32, 32],
  iconAnchor: [16, 16],
});

// Drainage marker
const drainageIcon = L.divIcon({
  className: "drainage-marker",
  html: "🚰",
  iconSize: [32, 32],
  iconAnchor: [16, 16],
});

function FloodMapComponent() {
  const chennaiPosition = [13.0827, 80.2707];

  // DEMO DATA — will be replaced with verified Chennai data later
  const rainfallPoints = [
    {
      id: "RF-01",
      name: "North Chennai Monitoring Point",
      position: [13.1067, 80.2871],
      rainfall: 52,
    },
    {
      id: "RF-02",
      name: "Central Chennai Monitoring Point",
      position: [13.0569, 80.2425],
      rainfall: 41,
    },
    {
      id: "RF-03",
      name: "South Chennai Monitoring Point",
      position: [12.9846, 80.2209],
      rainfall: 63,
    },
  ];

  const drainagePoints = [
  {
    id: "DR-01",
    name: "Drainage Point North",
    position: [13.1158, 80.2864],
    utilization: 68,
    rainfall: 52,
    capacity: 100,
  },
   {
  id: "DR-02",
  name: "Drainage Point Central",
  position: [13.0732, 80.2609],
  utilization: 82,
  rainfall: 41,
  capacity: 100,
},
    {
  id: "DR-03",
  name: "Drainage Point South",
  position: [12.9965, 80.2181],
  utilization: 91,
  rainfall: 63,
  capacity: 100,
},
  ];
  const riskResults = drainagePoints.map((point) =>
  calculateFloodRisk(
    point.rainfall,
    point.utilization
  )
);

const riskCounts = {
  LOW: riskResults.filter((r) => r.level === "LOW").length,
  MODERATE: riskResults.filter((r) => r.level === "MODERATE").length,
  HIGH: riskResults.filter((r) => r.level === "HIGH").length,
  CRITICAL: riskResults.filter((r) => r.level === "CRITICAL").length,
};

const averageRainfall =
  drainagePoints.reduce(
    (total, point) => total + point.rainfall,
    0
  ) / drainagePoints.length;

const highestDrainageUtilization = Math.max(
  ...drainagePoints.map((point) => point.utilization)
);

const overallRisk =
  riskCounts.CRITICAL > 0
    ? "CRITICAL"
    : riskCounts.HIGH > 0
    ? "HIGH"
    : riskCounts.MODERATE > 0
    ? "MODERATE"
    : "LOW";
    const nowcastData = [
  {
    time: "Now",
    rainfall: averageRainfall,
    drainage: highestDrainageUtilization,
  },
  {
    time: "+1 Hour",
    rainfall: averageRainfall * 1.1,
    drainage: Math.min(highestDrainageUtilization + 3, 100),
  },
  {
    time: "+2 Hours",
    rainfall: averageRainfall * 1.2,
    drainage: Math.min(highestDrainageUtilization + 6, 100),
  },
  {
    time: "+3 Hours",
    rainfall: averageRainfall * 1.3,
    drainage: Math.min(highestDrainageUtilization + 9, 100),
  },
];

const nowcastResults = nowcastData.map((forecast) =>
  calculateFloodRisk(
    forecast.rainfall,
    forecast.drainage
  )
);
const getRiskColor = (riskLevel) => {
  if (riskLevel === "CRITICAL") return "#dc2626";
  if (riskLevel === "HIGH") return "#f97316";
  if (riskLevel === "MODERATE") return "#eab308";
  return "#22c55e";
};
  
    
return (
  <div className="map-wrapper">

    
<div className="risk-summary">
      <h2>Chennai Flood Monitoring</h2>

      <div className="risk-grid">

        <div className="risk-card">
          <span>🟢 Low</span>
          <strong>{riskCounts.LOW}</strong>
        </div>

        <div className="risk-card">
          <span>🟡 Moderate</span>
          <strong>{riskCounts.MODERATE}</strong>
        </div>

        <div className="risk-card">
          <span>🟠 High</span>
          <strong>{riskCounts.HIGH}</strong>
        </div>

        <div className="risk-card">
          <span>🔴 Critical</span>
          <strong>{riskCounts.CRITICAL}</strong>
        </div>

      </div>

      <div className="monitoring-stats">

        <div>
          <span>Average Rainfall</span>
          <strong>
            {averageRainfall.toFixed(1)} mm/hr
          </strong>
        </div>

        <div>
          <span>Highest Drainage Stress</span>
          <strong>
            {highestDrainageUtilization}%
          </strong>
        </div>

        <div>
          <span>Overall Status</span>
          <strong>
            ⚠️ {overallRisk}
          </strong>
        </div>

      </div>

      <div className="demo-warning">
        DEMO DATA — Not live emergency information
      </div>
      <div className="nowcast-panel">

  <h3>0–3 Hour Flood Nowcast</h3>

  <div className="nowcast-grid">

    {nowcastResults.map((result, index) => (

      <div
        className={`nowcast-card ${result.level.toLowerCase()}`}
        key={result.time}
      >

        <span>{result.time}</span>

        <strong>
          {result.level === "CRITICAL"
            ? "🔴"
            : result.level === "HIGH"
            ? "🟠"
            : result.level === "MODERATE"
            ? "🟡"
            : "🟢"}
        </strong>

        <small>
          {result.level}
        </small>

        <div className="forecast-details">

          <span>
            🌧️ {nowcastData[index].rainfall.toFixed(1)} mm/hr
          </span>

          <span>
            🚰 {nowcastData[index].drainage}%
            drainage
          </span>

        </div>

      </div>

    ))}

  </div>


  

  <div className="nowcast-info">

    <span>🌧️ Rainfall Trend</span>
    <strong>Increasing ↗</strong>

    <span>🚰 Drainage Stress</span>
    <strong>Increasing ↗</strong>

  </div>
  <div className="rainfall-chart">

    <h3>🌧️ Rainfall Forecast Trend</h3>

    <p>Expected rainfall intensity over the next 3 hours</p>

    <ResponsiveContainer width="100%" height={260}>
      <LineChart data={nowcastData}>

        <CartesianGrid strokeDasharray="3 3" />

        <XAxis dataKey="time" />

        <YAxis />

        <Tooltip />

        <Line
          type="monotone"
          dataKey="rainfall"
          stroke="#1677c8"
          strokeWidth={3}
          dot={{ r: 5 }}
        />

      </LineChart>
    </ResponsiveContainer>

  </div>
</div>

    </div>
      <MapContainer
        center={chennaiPosition}
        zoom={12}
        style={{ height: "500px", width: "100%" }}
      >

        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
{/* DEMO FLOOD RISK ZONES */}

<Circle
  center={[13.1067, 80.2871]}
  radius={1800}
  pathOptions={{
    color: "#f97316",
    fillColor: "#f97316",
    fillOpacity: 0.25,
  }}
>
  <Popup>
    <strong>🟠 HIGH RISK ZONE</strong>
    <br />
    North Chennai
    <br />
    Rainfall: 52 mm/hr
    <br />
    Drainage Stress: 68%
    <br />
    <small>Demo risk zone</small>
  </Popup>
</Circle>

<Circle
  center={[13.0569, 80.2425]}
  radius={1500}
  pathOptions={{
    color: "#eab308",
    fillColor: "#eab308",
    fillOpacity: 0.25,
  }}
>
  <Popup>
    <strong>🟡 MODERATE RISK ZONE</strong>
    <br />
    Central Chennai
    <br />
    Rainfall: 41 mm/hr
    <br />
    Drainage Stress: 82%
    <br />
    <small>Demo risk zone</small>
  </Popup>
</Circle>

<Circle
  center={[12.9846, 80.2209]}
  radius={1700}
  pathOptions={{
    color: "#ef4444",
    fillColor: "#ef4444",
    fillOpacity: 0.25,
  }}
>
  <Popup>
    <strong>🔴 CRITICAL RISK ZONE</strong>
    <br />
    South Chennai
    <br />
    Rainfall: 63 mm/hr
    <br />
    Drainage Stress: 91%
    <br />
    <small>Demo risk zone</small>
  </Popup>
</Circle>
        {/* Rainfall monitoring points */}
        {rainfallPoints.map((point) => (
          <Marker
            key={point.id}
            position={point.position}
            icon={rainfallIcon}
          >
            <Popup>
              <strong>🌧️ Rainfall Monitoring</strong>
              <br />
              {point.name}
              <br />
              <br />

              <strong>Rainfall:</strong>{" "}
              {point.rainfall} mm/hr

              <br />

              <small>Demo value</small>
            </Popup>
          </Marker>
        ))}
{/* Flood risk zones */}
{drainagePoints.map((point) => {
  const risk = calculateFloodRisk(
    point.rainfall,
    point.utilization
  );

  return (
    <Circle
      key={`risk-${point.id}`}
      center={point.position}
      radius={700}
      pathOptions={{
        color: getRiskColor(risk.level),
        fillColor: getRiskColor(risk.level),
        fillOpacity: 0.25,
        weight: 2,
      }}
    >
      <Popup>
        <strong>⚠️ Flood Risk Zone</strong>
        <br />
        {point.name}
        <br />
        <br />

        <strong>Rainfall:</strong>{" "}
        {point.rainfall} mm/hr
        <br />

        <strong>Drainage Utilization:</strong>{" "}
        {point.utilization}%
        <br />

        <strong>Risk:</strong>{" "}
        {risk.level}
        <br />

        <strong>Score:</strong>{" "}
        {risk.score}/100
      </Popup>
    </Circle>
  );
})}
        {/* Drainage monitoring points */}
        {drainagePoints.map((point) => {
          const risk = calculateFloodRisk(
            point.rainfall,
            point.utilization
          );

          return (
            <Marker
              key={point.id}
              position={point.position}
              icon={drainageIcon}
            >
              <Popup>
                <strong>🚰 Drainage Monitoring</strong>
                <br />
                {point.name}
                <br />
                <br />

                <strong>Rainfall:</strong>{" "}
{point.rainfall} mm/hr
                <br />
<strong>Utilization:</strong>{" "}
{point.utilization}%
<br />

<strong>Remaining Capacity:</strong>{" "}
{100 - point.utilization}%
<br />
{point.utilization >= 90 ? (
  <>
    <strong style={{ color: "#dc2626" }}>
      ⚠️ Overflow Warning
    </strong>
    <br />
  </>
) : null}

<strong>Flood Risk:</strong>{" "}
{risk.level}
                <br />

                <strong>Risk Score:</strong>{" "}
                {risk.score}/100
                <br />

                <small>Demo calculation</small>
              </Popup>
            </Marker>
          );
        })}

        {/* Map legend */}
        <div className="map-legend">

          <div className="legend-title">
            Flood Risk
          </div>

          <div className="legend-item">
            <span className="legend-color low"></span>
            Low
          </div>

          <div className="legend-item">
            <span className="legend-color moderate"></span>
            Moderate
          </div>

          <div className="legend-item">
            <span className="legend-color high"></span>
            High
          </div>

          <div className="legend-item">
            <span className="legend-color critical"></span>
            Critical
          </div>

          <div className="legend-item">
            <span className="legend-color nodata"></span>
            No Data
          </div>

          <div className="legend-item">
            🌧️ Rainfall Point
          </div>

          <div className="legend-item">
            🚰 Drainage Point
          </div>

          <div className="legend-demo">
            Demo Risk Layer
          </div>

        </div>

      </MapContainer>

    </div>
  );
}

export default FloodMapComponent;