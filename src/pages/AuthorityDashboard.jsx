import {
  MapPin,
  CloudRain,
  Waves,
  AlertTriangle,
  Clock,
  ShieldCheck,
  Activity,
  Radio,
} from "lucide-react";

import { useLanguage } from "../i18n/LanguageContext";
import { useSimulation } from "../context/SimulationContext";

import SectionHeader from "../components/SectionHeader";
import RiskBadge from "../components/RiskBadge";
import DemoDisclaimer from "../components/DemoDisclaimer";

const actionKey = {
  CRITICAL: "authority.actionCritical",
  HIGH: "authority.actionHigh",
  MODERATE: "authority.actionModerate",
  LOW: "authority.actionLow",
};

const riskDescriptionKey = {
  LOW: "dashboard.riskDescLow",
  MODERATE: "dashboard.riskDescModerate",
  HIGH: "dashboard.riskDescHigh",
  CRITICAL: "dashboard.riskDescCritical",
};

function AuthorityDashboard() {
  const { t, tRisk, tPipe } = useLanguage();

  const {
    rainfall,
    maximumUtilization,
    overallRisk,
    riskCounts,
    processedPoints,
    totalPoints,
  } = useSimulation();

  // Priority = highest simulated drainage stress.
  const priorityPoints = [...processedPoints]
    .sort((a, b) => b.adjustedUtilization - a.adjustedUtilization)
    .slice(0, 8);

  return (
    <div className="authority-dashboard">

      <div className="authority-header">
        <div>
          <div className="authority-location">
            <MapPin size={16} aria-hidden="true" />
            {t("common.location")}
          </div>

          <h1>{t("authority.title")}</h1>

          <p>{t("authority.subtitle")}</p>
        </div>

        <div className="authority-status">
          <Radio size={15} aria-hidden="true" />
          {t("authority.statusOnline")}
        </div>
      </div>

      {/* CURRENT STATUS BANNER */}
      <div
        className={`authority-alert risk-level-${overallRisk.toLowerCase()}`}
        aria-live="polite"
      >
        <div className="authority-alert-icon" aria-hidden="true">
          <AlertTriangle size={26} />
        </div>

        <div>
          <span>{t("authority.priorityAlert")}</span>

          <h2>
            {t("map.currentFloodStatus")}: {tRisk(overallRisk)}
          </h2>

          <p>{t(riskDescriptionKey[overallRisk])}</p>
        </div>

        <div className="alert-updated">
          <Clock size={15} aria-hidden="true" />
          {t("common.updatedNow")}
        </div>
      </div>

      {/* STATS */}
      <div className="authority-stats">
        <div className="authority-stat-card">
          <div className="authority-stat-icon" aria-hidden="true">
            <CloudRain size={20} />
          </div>

          <div>
            <span>{t("authority.statRainfall")}</span>
            <strong>
              {rainfall} {t("common.unitMmHr")}
            </strong>
            <small>{t("authority.statRainfallNote")}</small>
          </div>
        </div>

        <div className="authority-stat-card">
          <div className="authority-stat-icon" aria-hidden="true">
            <Waves size={20} />
          </div>

          <div>
            <span>{t("authority.statStress")}</span>
            <strong>{maximumUtilization}%</strong>
            <small>{t("authority.statStressNote")}</small>
          </div>
        </div>

        <div className="authority-stat-card">
          <div className="authority-stat-icon" aria-hidden="true">
            <AlertTriangle size={20} />
          </div>

          <div>
            <span>{t("authority.statCritical")}</span>
            <strong>{riskCounts.CRITICAL}</strong>
            <small>{t("authority.statCriticalNote")}</small>
          </div>
        </div>

        <div className="authority-stat-card">
          <div className="authority-stat-icon" aria-hidden="true">
            <Clock size={20} />
          </div>

          <div>
            <span>{t("authority.statWindow")}</span>
            <strong>{t("common.window03")}</strong>
            <small>{t("authority.statWindowNote")}</small>
          </div>
        </div>
      </div>

      {/* RISK DISTRIBUTION STRIP */}
      <div className="authority-distribution">
        {["LOW", "MODERATE", "HIGH", "CRITICAL"].map((level) => (
          <div
            key={level}
            className={`distribution-item risk-level-${level.toLowerCase()}`}
          >
            <span className="distribution-dot" aria-hidden="true" />
            <span>{tRisk(level)}</span>
            <strong>{riskCounts[level]}</strong>
          </div>
        ))}

        <div className="distribution-total">
          <Activity size={15} aria-hidden="true" />
          {totalPoints} {t("authority.zonesCount")}
        </div>
      </div>

      {/* PRIORITY TABLE */}
      <div className="priority-section">
        <SectionHeader
          title={t("authority.priorityTitle")}
          subtitle={t("authority.prioritySub")}
          meta={`${priorityPoints.length} / ${totalPoints}`}
        />

        <div className="priority-table">
          <div className="table-header">
            <span>{t("authority.colId")}</span>
            <span>{t("authority.colArea")}</span>
            <span>{t("authority.colPipe")}</span>
            <span>{t("authority.colDrainage")}</span>
            <span>{t("authority.colRisk")}</span>
            <span>{t("authority.colAction")}</span>
          </div>

          {priorityPoints.map((point) => (
            <div className="table-row" key={point.id}>
              <strong>{point.id}</strong>

              <span>{point.road}</span>

              <span>{tPipe(point.pipeSize)}</span>

              <span>{point.adjustedUtilization}%</span>

              <RiskBadge level={point.risk.level} />

              <span>{t(actionKey[point.risk.level])}</span>
            </div>
          ))}
        </div>
      </div>

      {/* RESPONSE INFORMATION */}
      <div className="response-section">
        <SectionHeader
          title={t("authority.responseTitle")}
          subtitle={t("authority.responseSub")}
        />

        <div className="response-grid">
          <div className="response-card critical">
            <AlertTriangle size={20} aria-hidden="true" />
            <div>
              <strong>{t("authority.response1")}</strong>
              <p>{t("authority.response1Text")}</p>
            </div>
          </div>

          <div className="response-card warning">
            <Waves size={20} aria-hidden="true" />
            <div>
              <strong>{t("authority.response2")}</strong>
              <p>{t("authority.response2Text")}</p>
            </div>
          </div>

          <div className="response-card normal">
            <ShieldCheck size={20} aria-hidden="true" />
            <div>
              <strong>{t("authority.response3")}</strong>
              <p>{t("authority.response3Text")}</p>
            </div>
          </div>
        </div>
      </div>

      <DemoDisclaimer className="authority-demo-warning" />
    </div>
  );
}

export default AuthorityDashboard;
