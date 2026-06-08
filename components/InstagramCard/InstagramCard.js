import "./InstagramCard.css";

const InstagramIcon = () => (
  <svg
    width="50"
    height="50"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="ig-icon"
  >
    <rect x="2" y="2" width="20" height="20" rx="5.5" stroke="currentColor" strokeWidth="1.8" />
    <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.8" />
    <circle cx="17.5" cy="6.5" r="1.1" fill="currentColor" />
  </svg>
);

export default function InstagramCard() {
  return (
      <div className="ig-card">
        {/* Ambient glow blob */}
        <div className="ig-glow" />

        <div className="ig-card-inner">
          <div className="ig-icon-wrap">
            <InstagramIcon />
          </div>

          <p className="ig-stat">10M+</p>
          <p className="ig-label">Total Views</p>
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