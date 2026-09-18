import {
  CloudRain,
  Waves,
  AlertTriangle,
  Clock,
} from "lucide-react";

import FloodMapComponent from "../components/FloodMapComponent";

function FloodMap() {
  return (
    <main className="dashboard">
      <div className="dashboard-header">
        <div>
          <div className="location-label">
            📍 Chennai, Tamil Nadu
          </div>

          <h1>Live Flood Risk Map</h1>

          <p>
            Monitor rainfall, drainage conditions and predicted
            flood-risk zones across Chennai.
          </p>
        </div>

        <div className="demo-badge">
          DEMO MONITORING MODE
        </div>
      </div>

      <section className="stats-grid">

        <div className="stat-card">
          <div className="stat-icon">
            <CloudRain size={22} />
          </div>

          <div>
            <span>Rainfall Intensity</span>
            <h2>52 mm/hr</h2>
            <small>Demo observation</small>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">
            <AlertTriangle size={22} />
          </div>

          <div>
            <span>Flood Risk</span>
            <h2>HIGH</h2>
            <small>Current risk level</small>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">
            <Waves size={22} />
          </div>

          <div>
            <span>Drainage Utilization</span>
            <h2>78%</h2>
            <small>Demo value</small>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">
            <Clock size={22} />
          </div>

          <div>
            <span>Next 60 Minutes</span>
            <h2>CRITICAL</h2>
            <small>Predicted risk</small>
          </div>
        </div>

      </section>

      <section className="nowcast-section">

        <div className="section-heading">
          <div>
            <h2>Chennai Flood Risk Map</h2>
            <p>
              Rainfall + drainage conditions + flood prediction
            </p>
          </div>

          <span>Live Monitoring</span>
        </div>

        <FloodMapComponent />

      </section>

    </main>
  );
}

export default FloodMap;