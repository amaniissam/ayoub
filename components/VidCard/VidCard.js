import "./VidCard.css";

const VideoIcon = () => (
  <svg width="50" height="50" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="6" width="13" height="12" rx="2" />
    <path d="M15 9.5l5.5-3v11l-5.5-3V9.5z" />
  </svg>
);

export default function VidCard() {
  return (
      <div className="vd-card">
        {/* Ambient glow blob */}
        <div className="vd-glow" />

        <div className="vd-card-inner">
          <div className="vd-icon-wrap">
            <VideoIcon />
          </div>

          <p className="vd-stat">30+</p>
          <p className="vd-label">Happy Clients</p>
        </div>
      </div>

  );
}

