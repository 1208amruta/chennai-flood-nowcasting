import { useLanguage } from "../i18n/LanguageContext";
import { LANGUAGES } from "../i18n/translations";

function LanguageSwitcher() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div
      className="language-switcher"
      role="group"
      aria-label={t("nav.language")}
    >
      {LANGUAGES.map((item, index) => (
        <span key={item.code} className="language-option">
          {index > 0 && (
            <span className="language-divider" aria-hidden="true">
              |
            </span>
          )}

          <button
            type="button"
            className={language === item.code ? "active" : ""}
            onClick={() => setLanguage(item.code)}
            aria-pressed={language === item.code}
            lang={item.code}
            title={item.name}
          >
            {item.label}
          </button>
        </span>
      ))}
    </div>
  );
}

export default LanguageSwitcher;
