import { useLanguage } from "../i18n/LanguageContext";

/*
  Shows a flood-risk level.
  Colour AND text are used, so the meaning is never colour-only.
*/
function RiskBadge({ level, showScore, score, size = "md" }) {
  const { tRisk } = useLanguage();

  const key = String(level).toLowerCase();

  return (
    <span className={`risk-badge ${key} badge-${size}`}>
      <span className="risk-dot" aria-hidden="true" />
      {tRisk(level)}
      {showScore && score !== undefined && (
        <span className="risk-badge-score">{score}</span>
      )}
    </span>
  );
}

export default RiskBadge;
