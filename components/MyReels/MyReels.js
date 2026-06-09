'use client';

import { useState, useRef } from 'react';
import styles from './MyReels.module.css';

const reels = [
  { id: 1, youtubeId: 'dQw4w9WgXcQ', title: 'Creative Direction', subtitle: 'Brand Identity' },
  { id: 2, youtubeId: 'ScMzIvxBSi4', title: 'Motion Design',      subtitle: 'Visual Effects' },
  { id: 3, youtubeId: 'jNQXAC9IVRw', title: 'Short Film Edit',    subtitle: 'Cinematic Feel' },
  { id: 4, youtubeId: '9bZkp7q19f0', title: 'Color Grading',      subtitle: 'Post Production' },
  { id: 5, youtubeId: 'kJQP7kiw5Fk', title: 'Highlight Reel',     subtitle: 'Best Moments' },
];

export default function MyReels() {
  const [activeVideo, setActiveVideo] = useState(null);
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (!scrollRef.current) return;
    const track = scrollRef.current;
    const cards = Array.from(track.querySelectorAll('[data-card]'));
    if (!cards.length) return;

    const gap = 20; // must match the gap in CSS
    const cardWidth = cards[0].getBoundingClientRect().width;
    const currentScrollLeft = track.scrollLeft;

    const closestIndex = cards.reduce((closest, card, idx) => {
      const diff = Math.abs(card.offsetLeft - currentScrollLeft);
      return diff < closest.diff ? { idx, diff } : closest;
    }, { idx: 0, diff: Infinity }).idx;

    const nextIndex = dir === 'left'
      ? (closestIndex === 0 ? cards.length - 1 : closestIndex - 1)
      : (closestIndex === cards.length - 1 ? 0 : closestIndex + 1);

    track.scrollTo({ left: cards[nextIndex].offsetLeft, behavior: 'smooth' });
  };

  return (
    <section className={styles.section}>
      <div className={styles.blob1} />
      <div className={styles.blob2} />

      <div className={styles.header}>
        <span className={styles.iconWrap}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <polygon points="5,3 19,12 5,21" fill="#38bdf8" />
          </svg>
        </span>
        <h2 className={styles.title}>My Reels</h2>

      </div>

      <p className={styles.sub}>
        Check out my latest reels and video editing work<br />
        watch them directly right here.
      </p>

      <div className={styles.sliderWrapper}>
        <button className={`${styles.navBtn} ${styles.navLeft}`} onClick={() => scroll('left')} aria-label="Scroll left">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        <div className={styles.track} ref={scrollRef}>
          {reels.map((reel, i) => (
            <div key={reel.id} data-card className={styles.card} style={{ animationDelay: `${i * 0.08}s` }}>
              {activeVideo === reel.id ? (
                <div className={styles.playerWrap}>
                  <iframe
                    src={`https://www.youtube.com/embed/${reel.youtubeId}?autoplay=1&rel=0`}
                    title={reel.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className={styles.iframe}
                  />
                  <button className={styles.closeBtn} onClick={() => setActiveVideo(null)} aria-label="Close">✕</button>
                </div>
              ) : (
                <div className={styles.thumb} onClick={() => setActiveVideo(reel.id)}>
                  <img
                    src={`https://img.youtube.com/vi/${reel.youtubeId}/hqdefault.jpg`}
                    alt={reel.title}
                    className={styles.thumbImg}
                  />
                  <div className={styles.thumbOverlay} />

                  <div className={styles.badge}>
                    <span className={styles.avatar}>{reel.id}</span>
                    <span className={styles.badgeName}>Ayoub Edits</span>
                  </div>

                  <button className={styles.playBtn} aria-label="Play">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="12" fill="rgba(56,189,248,0.18)" />
                      <polygon points="9,7 19,12 9,17" fill="#38bdf8" />
                    </svg>
                  </button>

                  <div className={styles.cardInfo}>
                    <span className={styles.cardTitle}>{reel.title}</span>
                    <span className={styles.cardSub}>{reel.subtitle}</span>
                  </div>

                  <a
                    href={`https://www.youtube.com/watch?v=${reel.youtubeId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.ytLink}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="#ff0000">
                      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8z"/>
                      <polygon points="9.7,15.5 15.8,12 9.7,8.5" fill="white"/>
                    </svg>
                    Watch on YouTube
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

        <button className={`${styles.navBtn} ${styles.navRight}`} onClick={() => scroll('right')} aria-label="Scroll right">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>

      <a href="https://www.instagram.com/vfx.ayoub/" target="_blank" rel="noopener noreferrer" className={styles.igBtn}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
        </svg>
        View More on Instagram
      </a>
    </section>
  );
}