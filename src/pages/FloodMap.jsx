import {
  CloudRain,
  Waves,
  AlertTriangle,
  MapPin,
  Activity,
} from "lucide-react";

import FloodMapComponent from "../components/FloodMapComponent";
import StatusCard from "../components/StatusCard";
import SectionHeader from "../components/SectionHeader";

import { useLanguage } from "../i18n/LanguageContext";
import { useSimulation } from "../context/SimulationContext";

function FloodMap() {
  const { t } = useLanguage();
  const { totalPoints } = useSimulation();

  return (
    <main className="dashboard flood-map-page">

      {/* HEADER */}
      <div className="dashboard-header">
        <div>
          <div className="location-label">
            <MapPin size={16} aria-hidden="true" />
            {t("common.location")}
          </div>

          <h1>{t("mapPage.title")}</h1>

          <p>{t("mapPage.subtitle")}</p>
        </div>

        <div className="demo-badge">{t("common.demoMonitoringMode")}</div>
      </div>

      {/* QUICK INFO */}
      <section className="stats-grid">
        <StatusCard
          icon={<CloudRain size={22} />}
          label={t("mapPage.statInput")}
          value={t("common.rainfall")}
          note={t("mapPage.statInputNote")}
        />

        <StatusCard
          icon={<AlertTriangle size={22} />}
          label={t("mapPage.statLevels")}
          value={t("mapPage.statLevelsValue")}
          note={t("mapPage.statLevelsNote")}
        />

        <StatusCard
          icon={<Waves size={22} />}
          label={t("mapPage.statArea")}
          value={t("mapPage.statAreaValue")}
          note={t("mapPage.statAreaNote")}
        />

        <StatusCard
          icon={<Activity size={22} />}
          label={t("mapPage.statPoints")}
          value={totalPoints}
          note={t("mapPage.statPointsNote")}
        />
      </section>

      {/* MAIN MAP SYSTEM */}
      <section className="nowcast-section map-main-section">
        <SectionHeader
          title={t("mapPage.sectionTitle")}
          subtitle={t("mapPage.sectionSubtitle")}
          meta={t("mapPage.interactive")}
        />

        <FloodMapComponent />
      </section>
    </main>
  );
}

export default FloodMap;
