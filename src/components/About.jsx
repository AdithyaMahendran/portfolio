function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Results-driven <strong>Senior Software Engineer</strong> with 7 years of experience designing, 
              architecting, and scaling distributed systems across banking, logistics, analytics, 
              and SaaS platforms.
            </p>
            <p>
              Strong expertise in <strong>microservices architecture</strong>, REST API design, and 
              cloud-native development on AWS. Proven track record of modernizing legacy systems, 
              improving system reliability, enabling CI/CD automation, and mentoring engineers.
            </p>
            <p>
              Adept at leading end-to-end product development from architecture to production support.
            </p>
          </div>
          <div className="about-highlights">
            <div className="highlight-card">
              <span className="highlight-number">7</span>
              <span className="highlight-label">Years Experience</span>
            </div>
            <div className="highlight-card">
              <span className="highlight-number">4</span>
              <span className="highlight-label">Companies</span>
            </div>
            <div className="highlight-card">
              <span className="highlight-number">AWS</span>
              <span className="highlight-label">Certified Architect</span>
            </div>
            <div className="highlight-card">
              <span className="highlight-number">10+</span>
              <span className="highlight-label">Technologies</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
