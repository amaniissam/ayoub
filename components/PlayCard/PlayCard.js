import "./PlayCard.css";

const PlayIcon = () => (
  <svg width="50" height="50" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <polygon points="6,3 20,12 6,21" />
  </svg>
);


export default function PlayCard() {
  return (
      <div className="pl-card">
        {/* Ambient glow blob */}
        <div className="pl-glow" />

        <div className="pl-card-inner">
          <div className="pl-icon-wrap">
            <PlayIcon />
          </div>

          <p className="pl-stat">500+</p>
          <p className="pl-label">Project Done</p>
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