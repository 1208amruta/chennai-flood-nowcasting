/*
  Single monitoring statistic card:  icon + label + value + note
*/
function StatusCard({ icon, label, value, note }) {
  return (
    <div className="stat-card">
      <div className="stat-icon" aria-hidden="true">
        {icon}
      </div>

      <div>
        <span>{label}</span>
        <h2>{value}</h2>
        <small>{note}</small>
      </div>
    </div>
  );
}

export default StatusCard;
