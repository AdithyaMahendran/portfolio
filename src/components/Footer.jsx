function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <a href="#hero" className="footer-logo">
            <span className="logo-bracket">&lt;</span>
            AM
            <span className="logo-bracket"> /&gt;</span>
          </a>
          <p className="footer-text">
            Designed & Built by Adithya M
          </p>
          <p className="footer-copyright">
            &copy; {currentYear} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
