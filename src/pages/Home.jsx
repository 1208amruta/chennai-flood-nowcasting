import {
  CloudRain,
  Waves,
  AlertTriangle,
  MapPin,
  Clock,
  ShieldCheck,
} from "lucide-react";

function Home() {
  return (
    <main className="dashboard">
      <section className="dashboard-header">
        <div>
          <div className="location-label">
            <MapPin size={16} />
            Chennai, Tamil Nadu
          </div>

          <h1>Urban Flood Nowcasting</h1>

          <p>
            Real-time rainfall, drainage and flood-risk monitoring
            for public safety.
          </p>
        </div>

        <div className="demo-badge">
          DEMO MONITORING MODE
        </div>
      </section>

      <section className="risk-banner">
        <div className="risk-icon">
          <AlertTriangle size={28} />
        </div>

        <div>
          <span>Current Flood Risk</span>
          <h2>HIGH RISK</h2>
          <p>
            Increased rainfall and drainage utilization detected.
          </p>
        </div>

        <div className="risk-time">
          <Clock size={16} />
          Updated 12:30 PM
        </div>
      </section>

      <section className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon">
            <CloudRain size={22} />
          </div>

          <div>
            <span>Rainfall Intensity</span>
            <h2>52 mm/hr</h2>
            <small>Current observation</small>
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
            <AlertTriangle size={22} />
          </div>

          <div>
            <span>Affected Zones</span>
            <h2>3</h2>
            <small>Monitoring areas</small>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">
            <ShieldCheck size={22} />
          </div>

          <div>
            <span>System Status</span>
            <h2>Online</h2>
            <small>All services operational</small>
          </div>
        </div>
      </section>

      <section className="nowcast-section">
        <div className="section-heading">
          <div>
            <h2>Flood Nowcast</h2>
            <p>Expected flood-risk progression</p>
          </div>

          <span>Next 3 hours</span>
        </div>

        <div className="nowcast-grid">
          <div className="nowcast-card moderate">
            <span>NOW</span>
            <strong>MODERATE</strong>
            <small>Current condition</small>
          </div>

          <div className="nowcast-card high">
            <span>+30 MIN</span>
            <strong>HIGH</strong>
            <small>Risk increasing</small>
          </div>

          <div className="nowcast-card critical">
            <span>+60 MIN</span>
            <strong>CRITICAL</strong>
            <small>Flooding possible</small>
          </div>

          <div className="nowcast-card critical">
            <span>+120 MIN</span>
            <strong>CRITICAL</strong>
            <small>High-risk condition</small>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;