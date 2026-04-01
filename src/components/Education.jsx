function Education() {
  return (
    <section id="education" className="section education-section">
      <div className="container">
        <h2 className="section-title">Education & Certification</h2>
        <div className="edu-grid">
          <div className="edu-card">
            <div className="edu-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                <path d="M6 12v5c3 3 9 3 12 0v-5"/>
              </svg>
            </div>
            <h3>Bachelor of Engineering</h3>
            <p className="edu-period">2015 – 2019</p>
          </div>
          <div className="edu-card cert-card">
            <div className="edu-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="8" r="6"/>
                <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
              </svg>
            </div>
            <h3>AWS Certified Solutions Architect</h3>
            <p className="edu-subtitle">Associate</p>
            <p className="edu-period">Valid through March 2026</p>
            <span className="cert-badge">AWS Certified</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
