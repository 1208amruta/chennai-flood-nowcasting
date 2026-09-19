import { AlertTriangle } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

function DemoDisclaimer({ className = "demo-warning" }) {
  const { t } = useLanguage();

  return (
    <div className={className} role="note">
      <AlertTriangle size={15} aria-hidden="true" />

      <span>
        <strong>{t("disclaimer.title")}</strong> — {t("disclaimer.text")}
      </span>
    </div>
  );
}

export default DemoDisclaimer;
