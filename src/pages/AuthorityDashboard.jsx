import {
  AlertTriangle,
  MapPin,
  CloudRain,
  Waves,
  CheckCircle,
  Clock,
} from "lucide-react";

function AuthorityDashboard() {
  const priorityZones = [
    {
      area: "South Chennai",
      rainfall: 63,
      drainage: 91,
      risk: "CRITICAL",
      action: "Inspect drainage and prepare response team",
    },
    {
      area: "Central Chennai",
      rainfall: 41,
      drainage: 82,
      risk: "MODERATE",
      action: "Increase monitoring",
    },
    {
      area: "North Chennai",
      rainfall: 52,
      drainage: 68,
      risk: "HIGH",
      action: "Monitor drainage capacity",
    },
  ];

  return (
    <div className="authority-dashboard">

      {/* Header */}
      <div className="authority-header">

        <div>
          <div className="authority-location">
            <MapPin size={16} />
            Chennai, Tamil Nadu
          </div>

          <h1>Authority Dashboard</h1>

          <p>
            Flood monitoring, risk assessment and emergency response
          </p>
        </div>

        <div className="authority-status">
          <CheckCircle size={16} />
          System Monitoring
        </div>

      </div>

      {/* Alert Banner */}
      <div className="authority-alert">

        <div className="authority-alert-icon">
          <AlertTriangle size={28} />
        </div>

        <div>
          <span>PRIORITY ALERT</span>

          <h2>Critical flood risk detected in South Chennai</h2>

          <p>
            High rainfall combined with elevated drainage stress
            requires immediate attention.
          </p>
        </div>

        <div className="alert-updated">
          <Clock size={15} />
          Updated now
        </div>

      </div>

      {/* Statistics */}
      <div className="authority-stats">

        <div className="authority-stat-card">
          <div className="authority-stat-icon">
            <CloudRain size={23} />
          </div>

          <div>
            <span>Average Rainfall</span>
            <strong>52.0 mm/hr</strong>
            <small>Current monitoring</small>
          </div>
        </div>

        <div className="authority-stat-card">
          <div className="authority-stat-icon">
            <Waves size={23} />
          </div>

          <div>
            <span>Highest Drainage Stress</span>
            <strong>91%</strong>
            <small>South Chennai</small>
          </div>
        </div>

        <div className="authority-stat-card">
          <div className="authority-stat-icon">
            <AlertTriangle size={23} />
          </div>

          <div>
            <span>Critical Zones</span>
            <strong>1</strong>
            <small>Immediate attention</small>
          </div>
        </div>

        <div className="authority-stat-card">
          <div className="authority-stat-icon">
            <Clock size={23} />
          </div>

          <div>
            <span>Forecast Window</span>
            <strong>0–3 Hours</strong>
            <small>Short-term nowcast</small>
          </div>
        </div>

      </div>

      {/* Priority Zones */}
      <div className="priority-section">

        <div className="priority-heading">
          <div>
            <h2>Priority Monitoring Zones</h2>
            <p>
              Areas requiring monitoring or response based on the demo model
            </p>
          </div>

          <span>3 monitored zones</span>
        </div>

        <div className="priority-table">

          <div className="table-header">
            <span>AREA</span>
            <span>RAINFALL</span>
            <span>DRAINAGE</span>
            <span>RISK</span>
            <span>RECOMMENDED ACTION</span>
          </div>

          {priorityZones.map((zone) => (

            <div className="table-row" key={zone.area}>

              <strong>
                <MapPin size={15} />
                {zone.area}
              </strong>

              <span>
                🌧️ {zone.rainfall} mm/hr
              </span>

              <span>
                🚰 {zone.drainage}%
              </span>

              <span
                className={`risk-badge ${zone.risk.toLowerCase()}`}
              >
                {zone.risk}
              </span>

              <span>
                {zone.action}
              </span>

            </div>

          ))}

        </div>

      </div>

      {/* Response Actions */}
      <div className="response-section">

        <h2>Recommended Response Actions</h2>

        <div className="response-grid">

          <div className="response-card critical">
            <AlertTriangle size={22} />

            <div>
              <strong>South Chennai</strong>

              <p>
                Inspect drainage infrastructure and prepare
                emergency response resources.
              </p>
            </div>
          </div>

          <div className="response-card warning">
            <Waves size={22} />

            <div>
              <strong>Drainage Monitoring</strong>

              <p>
                Closely monitor locations approaching drainage
                capacity.
              </p>
            </div>
          </div>

          <div className="response-card normal">
            <CheckCircle size={22} />

            <div>
              <strong>Continuous Monitoring</strong>

              <p>
                Continue rainfall and drainage monitoring for
                the next 3 hours.
              </p>
            </div>
          </div>

        </div>

      </div>

      <div className="authority-demo-warning">
        DEMO DATA — Prototype for SIH demonstration. Not an official
        emergency management system.
      </div>

    </div>
  );
}

export default AuthorityDashboard;