import styles from './ContactCTA.module.css';

export default function ContactCTA() {
  return (
    <section className={styles.section}>
      {/* Background glow effects */}
      <div className={styles.glowLeft}></div>
      <div className={styles.glowRight}></div>

      <div className={styles.container}>
        {/* Heading */}
        <div className={styles.headingWrapper}>
          <span className={styles.envelopeIcon}>✉</span>
          <h2 className={styles.heading}>Ready to Create Something Amazing?</h2>
          <span className={styles.envelopeIcon}>✉</span>
        </div>

        {/* Subtext */}
        <p className={styles.subtext}>
          Let&apos;s bring your vision to life with professional video editing that
          captivates your audience and elevates your brand. Get in touch to
          discuss your next project.
        </p>

        {/* Cards */}
        <div className={styles.cardsGrid}>
          <div className={styles.card}>
            <div className={styles.cardIcon}>⚡</div>
            <h3 className={styles.cardTitle}>Quick Response</h3>
            <p className={styles.cardText}>
              Get a response within 24 hours. I&apos;m always excited to discuss new
              creative projects and collaborations.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon}>🎯</div>
            <h3 className={styles.cardTitle}>Custom Solutions</h3>
            <p className={styles.cardText}>
              Every project is unique. I provide tailored editing solutions that
              match your brand and vision perfectly.
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className={styles.buttonsRow}>
          <a
            href="https://www.instagram.com/vfx.ayoub/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btnInstagram}
          >
            <svg className={styles.btnIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <circle cx="12" cy="12" r="4"/>
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
            </svg>
            Connect on Instagram
          </a>

          <a
            href="https://api.whatsapp.com/send?phone=213553202457&token=eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjEyNSJ9.eyJleHAiOjE3ODEwMjExOTcsInBob25lIjoiKzIxMzU1MzIwMjQ1NyIsInRleHQiOiIiLCJhcHAiOiJpbnN0YWdyYW0ifQ.w4Nn8KcyRNUHHyyboiH7qCMOoAaTXGhsJjFPWkjtb61MaMsBhasRD4bHYYgBnOdeCX0URBkd9L17YUucsfy9xw&utm_campaign=wa_phone_number_xma&source_surface=45"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btnWhatsapp}
          >
            <svg className={styles.btnIcon} viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Chat on WhatsApp
          </a>
        </div>

        {/* Disclaimer */}
        <p className={styles.disclaimer}>
          DM me on Instagram or WhatsApp to discuss your project requirements and get a free consultation
        </p>
      </div>
    </section>
  );
}