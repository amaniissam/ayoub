import "./BoltCard.css";

const BoltIcon = () => (
  <svg width="50" height="50" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M13 2L4.5 13.5H11L10 22L19.5 10.5H13L13 2Z" />
  </svg>
);


export default function BoltCard() {
  return (
      <div className="bt-card">
        {/* Ambient glow blob */}
        <div className="bt-glow" />

        <div className="bt-card-inner">
          <div className="bt-icon-wrap">
            <BoltIcon />
          </div>

          <p className="bt-stat">5.0</p>
          <p className="bt-label">Average Ratings</p>
        </div>
      </div>

  );
}

/**
 * 
const PlayIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <polygon points="6,3 20,12 6,21" />
  </svg>
);

const VideoIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="6" width="13" height="12" rx="2" />
    <path d="M15 9.5l5.5-3v11l-5.5-3V9.5z" />
  </svg>
);

const BoltIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M13 2L4.5 13.5H11L10 22L19.5 10.5H13L13 2Z" />
  </svg>
);

 */