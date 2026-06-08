import './HeroButtons.css';

export default function HeroButtons() {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="hero-buttons">
      <button 
        className="btn btn-primary"
        onClick={() => scrollToSection('projects')}
      >
        <span className="btn-icon">▶</span>
        View My Work
      </button>

      <button 
        className="btn btn-outline"
        onClick={() => scrollToSection('contact')}
      >
        <span className="btn-icon">✉</span>
        Get In Touch
      </button>
    </div>
  );
}