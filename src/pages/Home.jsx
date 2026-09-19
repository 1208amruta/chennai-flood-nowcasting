import {
  CloudRain,
  Waves,
  AlertTriangle,
  MapPin,
  Clock,
  ShieldCheck,
  ArrowRight,
  Map,
  Activity,
} from "lucide-react";

import { Link } from "react-router-dom";

import { useLanguage } from "../i18n/LanguageContext";
import { useSimulation } from "../context/SimulationContext";

import StatusCard from "../components/StatusCard";
import SectionHeader from "../components/SectionHeader";
import DemoDisclaimer from "../components/DemoDisclaimer";

const riskDescriptionKey = {
  LOW: "dashboard.riskDescLow",
  MODERATE: "dashboard.riskDescModerate",
  HIGH: "dashboard.riskDescHigh",
  CRITICAL: "dashboard.riskDescCritical",
};

function Home() {
  const { t, tRisk } = useLanguage();

  const {
    rainfall,
    maximumUtilization,
    overallRisk,
    highOrCritical,
    totalPoints,
    nowcast,
  } = useSimulation();

  return (
    <main className="dashboard home-dashboard">

      {/* HERO */}
      <section className="dashboard-header hero-header">
        <div>
          <div className="location-label">
            <MapPin size={16} aria-hidden="true" />
            {t("common.location")}
          </div>

          <h1>{t("dashboard.title")}</h1>

          <p>{t("dashboard.subtitle")}</p>
        </div>

        <div className="demo-badge">{t("common.simulationMode")}</div>
      </section>

      {/* CURRENT RISK */}
      <section
        className={`risk-banner risk-level-${overallRisk.toLowerCase()}`}
        aria-live="polite"
      >
        <div className="risk-icon" aria-hidden="true">
          <AlertTriangle size={28} />
        </div>

        <div>
          <span>{t("dashboard.currentRisk")}</span>

          <h2>{tRisk(overallRisk)}</h2>

          <p>{t(riskDescriptionKey[overallRisk])}</p>
        </div>

        <div className="risk-time">
          <Clock size={16} aria-hidden="true" />
          {t("common.updatedNow")}
        </div>
      </section>

      {/* MAIN STATISTICS */}
      <section className="stats-grid">
        <StatusCard
          icon={<CloudRain size={22} />}
          label={t("dashboard.statRainfall")}
          value={`${rainfall} ${t("common.unitMmHr")}`}
          note={t("dashboard.statRainfallNote")}
        />

        <StatusCard
          icon={<Waves size={22} />}
          label={t("dashboard.statDrainage")}
          value={`${maximumUtilization}%`}
          note={t("dashboard.statDrainageNote")}
        />

        <StatusCard
          icon={<AlertTriangle size={22} />}
          label={t("dashboard.statPoints")}
          value={highOrCritical}
          note={`${t("dashboard.statPointsNote")} (${totalPoints})`}
        />

        <StatusCard
          icon={<ShieldCheck size={22} />}
          label={t("dashboard.statStatus")}
          value={t("dashboard.statStatusValue")}
          note={t("dashboard.statStatusNote")}
        />
      </section>

      {/* FLOOD NOWCAST */}
      <section className="nowcast-section">
        <SectionHeader
          title={t("dashboard.nowcastTitle")}
          subtitle={t("dashboard.nowcastSubtitle")}
          meta={t("common.window03")}
        />

        <div className="nowcast-timeline">
          <div className="timeline-line" aria-hidden="true"></div>

          {nowcast.map((item) => (
            <div
              key={item.key}
              className={`timeline-item ${item.risk.level.toLowerCase()}`}
            >
              <div className="timeline-dot" aria-hidden="true"></div>

              <span>{t(`nowcast.${item.key}`)}</span>

              <strong>{tRisk(item.risk.level)}</strong>

              <small>
                {item.rainfall} {t("common.unitMmHr")}
              </small>

              <small>
                {item.drainage}% {t("nowcast.drainageSuffix")}
              </small>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECT EXPLANATION */}
      <section className="how-system-works">
        <SectionHeader
          title={t("dashboard.howTitle")}
          subtitle={t("dashboard.howSubtitle")}
        />

        <div className="process-grid">
          <div className="process-card">
            <div className="process-number">01</div>
            <CloudRain size={22} aria-hidden="true" />
            <h3>{t("dashboard.step1")}</h3>
            <p>{t("dashboard.step1Text")}</p>
          </div>

          <div className="process-arrow" aria-hidden="true">
            <ArrowRight size={22} />
          </div>

          <div className="process-card">
            <div className="process-number">02</div>
            <Waves size={22} aria-hidden="true" />
            <h3>{t("dashboard.step2")}</h3>
            <p>{t("dashboard.step2Text")}</p>
          </div>

          <div className="process-arrow" aria-hidden="true">
            <ArrowRight size={22} />
          </div>

          <div className="process-card">
            <div className="process-number">03</div>
            <Activity size={22} aria-hidden="true" />
            <h3>{t("dashboard.step3")}</h3>
            <p>{t("dashboard.step3Text")}</p>
          </div>
        </div>
      </section>

      {/* MAP CTA */}
      <section className="map-cta">
        <div>
          <div className="cta-icon" aria-hidden="true">
            <Map size={24} />
          </div>

          <div>
            <h2>{t("dashboard.ctaTitle")}</h2>
            <p>{t("dashboard.ctaText")}</p>
          </div>
        </div>

        <Link to="/map" className="cta-button">
          {t("dashboard.ctaButton")}
          <ArrowRight size={17} aria-hidden="true" />
        </Link>
      </section>

      <DemoDisclaimer />
    </main>
  );
}

export default Home;
