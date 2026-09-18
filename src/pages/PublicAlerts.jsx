import {
  AlertTriangle,
  MapPin,
  CloudRain,
  Waves,
  Clock,
  ShieldAlert,
} from "lucide-react";

function PublicAlerts() {
  return (
    <div className="public-alerts">

      <div className="public-header">
        <div>
          <div className="public-location">
            <MapPin size={16} />
            Chennai, Tamil Nadu
          </div>

          <h1>Flood Alert System</h1>

          <p>
            Real-time-style flood risk information for citizens
          </p>
        </div>

        <div className="public-demo">
          DEMO SYSTEM
        </div>
      </div>

      {/* Main Alert */}
      <div className="public-alert critical-alert">

        <div className="alert-icon">
          <ShieldAlert size={34} />
        </div>

        <div className="alert-content">

          <span>CURRENT FLOOD RISK</span>

          <h2>HIGH RISK</h2>

          <p>
            Heavy rainfall and increased drainage stress may
            cause localized flooding.
          </p>

        </div>

        <div className="alert-time">
          <Clock size={16} />
          Updated now
        </div>

      </div>

      {/* Monitoring information */}
      <div className="public-grid">

        <div className="public-card">

          <div className="public-card-icon">
            <CloudRain size={24} />
          </div>

          <div>
            <span>Rainfall</span>
            <strong>63 mm/hr</strong>
            <small>South Chennai</small>
          </div>

        </div>

        <div className="public-card">

          <div className="public-card-icon">
            <Waves size={24} />
          </div>

          <div>
            <span>Drainage Stress</span>
            <strong>91%</strong>
            <small>Near capacity</small>
          </div>

        </div>

        <div className="public-card">

          <div className="public-card-icon">
            <Clock size={24} />
          </div>

          <div>
            <span>Forecast Window</span>
            <strong>0–3 Hours</strong>
            <small>Short-term nowcast</small>
          </div>

        </div>

      </div>

      {/* Affected Area */}
      <div className="affected-section">

        <h2>
          <MapPin size={20} />
          Areas Requiring Attention
        </h2>

        <div className="area-card">

          <div>
            <strong>South Chennai</strong>
            <p>
              High rainfall and elevated drainage utilization
              detected in the demo model.
            </p>
          </div>

          <span className="high-badge">
            HIGH RISK
          </span>

        </div>

        <div className="area-card">

          <div>
            <strong>Central Chennai</strong>
            <p>
              Moderate rainfall with increasing drainage stress.
            </p>
          </div>

          <span className="moderate-badge">
            MODERATE
          </span>

        </div>

      </div>

      {/* Safety Recommendation */}
      <div className="safety-section">

        <div className="safety-title">

          <AlertTriangle size={22} />

          <h2>Safety Recommendation</h2>

        </div>

        <ul>

          <li>
            Avoid travelling through waterlogged or low-lying roads.
          </li>

          <li>
            Follow official emergency announcements.
          </li>

          <li>
            Avoid crossing flooded streets or drainage channels.
          </li>

          <li>
            Move to a safer location if local authorities issue
            an evacuation warning.
          </li>

        </ul>

      </div>

      <div className="public-footer">
        DEMO DATA — This prototype is not an official emergency
        warning system.
      </div>

    </div>
  );
}

export default PublicAlerts;