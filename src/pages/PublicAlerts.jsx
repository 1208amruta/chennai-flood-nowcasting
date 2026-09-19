import {
  AlertTriangle,
  MapPin,
  CloudRain,
  Waves,
  Clock,
  ShieldAlert,
  Info,
  HelpCircle,
} from "lucide-react";

import { useLanguage } from "../i18n/LanguageContext";
import { useSimulation } from "../context/SimulationContext";

import SectionHeader from "../components/SectionHeader";
import RiskBadge from "../components/RiskBadge";
import DemoDisclaimer from "../components/DemoDisclaimer";

const reasonKey = {
  CRITICAL: "alerts.reasonCritical",
  HIGH: "alerts.reasonHigh",
  MODERATE: "alerts.reasonModerate",
  LOW: "alerts.reasonModerate",
};

const riskDescriptionKey = {
  LOW: "dashboard.riskDescLow",
  MODERATE: "dashboard.riskDescModerate",
  HIGH: "dashboard.riskDescHigh",
  CRITICAL: "dashboard.riskDescCritical",
};

function PublicAlerts() {
  const { t, tRisk, tPipe } = useLanguage();

  const {
    rainfall,
    maximumUtilization,
    overallRisk,
    riskCounts,
    processedPoints,
    nowcast,
  } = useSimulation();

  // Alerts are derived from the SAME simulation data as the map.
  const alertPoints = processedPoints
    .filter(
      (point) =>
        point.risk.level === "HIGH" || point.risk.level === "CRITICAL"
    )
    .sort((a, b) => b.risk.score - a.risk.score)
    .slice(0, 6);

  return (
    <div className="public-alerts">

      <div className="public-header">
        <div>
          <div className="public-location">
            <MapPin size={16} aria-hidden="true" />
            {t("common.location")}
          </div>

          <h1>{t("alerts.title")}</h1>

          <p>{t("alerts.subtitle")}</p>
        </div>

        <div className="public-demo">{t("common.demoSystem")}</div>
      </div>

      {/* MAIN STATUS */}
      <div
        className={`public-alert risk-level-${overallRisk.toLowerCase()}`}
        aria-live="polite"
      >
        <div className="alert-icon" aria-hidden="true">
          <ShieldAlert size={34} />
        </div>

        <div className="alert-content">
          <span>{t("alerts.currentRisk")}</span>

          <h2>{tRisk(overallRisk)}</h2>

          <p>{t(riskDescriptionKey[overallRisk])}</p>
        </div>

        <div className="alert-time">
          <Clock size={16} aria-hidden="true" />
          {t("common.updatedNow")}
        </div>
      </div>

      {/* SUMMARY */}
      <div className="public-grid">
        <div className="public-card">
          <div className="public-card-icon" aria-hidden="true">
            <CloudRain size={24} />
          </div>

          <div>
            <span>{t("common.rainfall")}</span>
            <strong>
              {rainfall} {t("common.unitMmHr")}
            </strong>
            <small>{t("mapPage.statAreaValue")}</small>
          </div>
        </div>

        <div className="public-card">
          <div className="public-card-icon" aria-hidden="true">
            <Waves size={24} />
          </div>

          <div>
            <span>{t("alerts.stressLabel")}</span>
            <strong>{maximumUtilization}%</strong>
            <small>{t("map.maxUtilization")}</small>
          </div>
        </div>

        <div className="public-card">
          <div className="public-card-icon" aria-hidden="true">
            <AlertTriangle size={24} />
          </div>

          <div>
            <span>{t("alerts.highRiskLocations")}</span>
            <strong>{riskCounts.HIGH}</strong>
            <small>
              {t("alerts.criticalLocations")}: {riskCounts.CRITICAL}
            </small>
          </div>
        </div>

        <div className="public-card">
          <div className="public-card-icon" aria-hidden="true">
            <Clock size={24} />
          </div>

          <div>
            <span>{t("alerts.windowLabel")}</span>
            <strong>{t("common.window03")}</strong>
            <small>{t("alerts.windowNote")}</small>
          </div>
        </div>
      </div>

      {/* CURRENT ALERTS */}
      <section className="alert-list-section">
        <SectionHeader
          title={t("alerts.currentAlerts")}
          subtitle={t("alerts.currentAlertsSub")}
          meta={`${alertPoints.length}`}
        />

        {alertPoints.length === 0 ? (
          <div className="alert-empty">{t("alerts.noAlerts")}</div>
        ) : (
          <div className="alert-list">
            {alertPoints.map((point) => (
              <article
                key={point.id}
                className={`alert-row risk-level-${point.risk.level.toLowerCase()}`}
              >
                <div className="alert-row-head">
                  <RiskBadge level={point.risk.level} />

                  <span className="alert-row-time">
                    <Clock size={13} aria-hidden="true" />
                    {t("common.updatedNow")}
                  </span>
                </div>

                <h3>{point.road}</h3>

                <p className="alert-row-meta">
                  {point.id} · {tPipe(point.pipeSize)} ·{" "}
                  {point.adjustedUtilization}% {t("map.utilization")}
                </p>

                <p className="alert-row-reason">
                  <strong>{t("alerts.reason")}:</strong>{" "}
                  {t(reasonKey[point.risk.level])}
                </p>
              </article>
            ))}
          </div>
        )}
      </section>

      {/* RECENT RISK CHANGES (nowcast progression) */}
      <section className="alert-list-section">
        <SectionHeader
          title={t("alerts.recentChanges")}
          subtitle={t("dashboard.nowcastSubtitle")}
          meta={t("common.next3Hours")}
        />

        <div className="change-list">
          {nowcast.map((item) => (
            <div
              key={item.key}
              className={`change-row risk-level-${item.risk.level.toLowerCase()}`}
            >
              <span className="change-time">{t(`nowcast.${item.key}`)}</span>

              <RiskBadge level={item.risk.level} />

              <span className="change-meta">
                {item.rainfall} {t("common.unitMmHr")} · {item.drainage}%{" "}
                {t("nowcast.drainageSuffix")}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* PUBLIC INFORMATION */}
      <section className="safety-section">
        <SectionHeader title={t("alerts.publicTitle")} />

        <div className="public-info-grid">
          <div className="public-info-card">
            <Info size={20} aria-hidden="true" />
            <h3>{t("alerts.whatTitle")}</h3>
            <p>{t("alerts.whatText")}</p>
          </div>

          <div className="public-info-card">
            <MapPin size={20} aria-hidden="true" />
            <h3>{t("alerts.whereTitle")}</h3>
            <p>{t("alerts.whereText")}</p>
          </div>

          <div className="public-info-card">
            <HelpCircle size={20} aria-hidden="true" />
            <h3>{t("alerts.whyTitle")}</h3>
            <p>{t("alerts.whyText")}</p>
          </div>

          <div className="public-info-card">
            <ShieldAlert size={20} aria-hidden="true" />
            <h3>{t("alerts.whatNowTitle")}</h3>
            <p>{t("alerts.whatNowText")}</p>
          </div>
        </div>
      </section>

      <DemoDisclaimer />
    </div>
  );
}

export default PublicAlerts;
