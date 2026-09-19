/*
  Small reusable heading used by every section so the
  pages stay visually consistent.
*/
function SectionHeader({ tag, title, subtitle, meta }) {
  return (
    <div className="section-heading">
      <div>
        {tag && <span className="section-tag">{tag}</span>}

        <h2>{title}</h2>

        {subtitle && <p>{subtitle}</p>}
      </div>

      {meta && <span>{meta}</span>}
    </div>
  );
}

export default SectionHeader;
