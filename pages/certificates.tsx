import React, { useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import MusicPlayer from '../components/MusicPlayer';

const CertificatesPage: React.FC = () => {
  useEffect(() => {
    // Add Font Awesome for icons
    const fontAwesome = document.createElement('link');
    fontAwesome.rel = 'stylesheet';
    fontAwesome.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
    document.head.appendChild(fontAwesome);

    // Add Google Fonts
    const googleFonts = document.createElement('link');
    googleFonts.rel = 'preconnect';
    googleFonts.href = 'https://fonts.googleapis.com';
    document.head.appendChild(googleFonts);

    const googleFonts2 = document.createElement('link');
    googleFonts2.rel = 'preconnect';
    googleFonts2.href = 'https://fonts.gstatic.com';
    googleFonts2.crossOrigin = 'anonymous';
    document.head.appendChild(googleFonts2);

    const googleFonts3 = document.createElement('link');
    googleFonts3.rel = 'stylesheet';
    googleFonts3.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap';
    document.head.appendChild(googleFonts3);

    // Mobile menu functionality
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    const mobileMenu = () => {
      hamburger?.classList.toggle('active');
      navMenu?.classList.toggle('active');
    };
    
    hamburger?.addEventListener('click', mobileMenu);

    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        hamburger?.classList.remove('active');
        navMenu?.classList.remove('active');
      });
    });

    return () => {
      hamburger?.removeEventListener('click', mobileMenu);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Certificates - Adarsh Jaiswal</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Professional certifications and academic accomplishments" />
        <meta name="keywords" content="certificates, achievements, professional development" />
        <meta name="author" content="Adarsh Jaiswal" />
      </Head>

      {/* Animated Background */}
      <div className="animated-bg">
        <div className="particles"></div>
        <div className="gradient-overlay"></div>
      </div>

      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <span className="logo-text">AJ</span>
          </div>
          <ul className="nav-menu">
            <li className="nav-item">
              <Link href="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link href="/about" className="nav-link">About</Link>
            </li>
            <li className="nav-item">
              <Link href="/projects" className="nav-link">Projects</Link>
            </li>
            <li className="nav-item">
              <Link href="/certificates" className="nav-link active">Certificates</Link>
            </li>
            <li className="nav-item">
              <Link href="/videos" className="nav-link">Videos</Link>
            </li>
            <li className="nav-item">
              <Link href="/contact" className="nav-link">Contact</Link>
            </li>
            <li className="nav-item">
              <button className="theme-toggle" id="themeToggle">
                <i className="fas fa-moon"></i>
              </button>
            </li>
          </ul>
          <div className="hamburger">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
      </nav>

      {/* Certificates Section */}
      <section className="certificates">
        <div className="container">
          <div className="section-header">
            <h1 className="section-title">Certificates & Achievements</h1>
            <div className="section-divider"></div>
            <p className="section-subtitle">Professional certifications and academic accomplishments</p>
          </div>

          <div className="certificates-grid">
            {/* Certificate 1 */}
            <div className="certificate-card">
              <div className="certificate-image">
                <img src="/assets/certificate1.jpg" alt="Web Development Certificate" />
                <div className="certificate-overlay">
                  <div className="certificate-info">
                    <h3>Advanced Web Development</h3>
                    <p className="certificate-date">March 2024</p>
                    <p className="certificate-issuer">Tech Academy</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Certificate 2 */}
            <div className="certificate-card">
              <div className="certificate-image">
                <img src="/assets/certificate2.jpg" alt="JavaScript Certificate" />
                <div className="certificate-overlay">
                  <div className="certificate-info">
                    <h3>JavaScript Mastery</h3>
                    <p className="certificate-date">February 2024</p>
                    <p className="certificate-issuer">Code Institute</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Certificate 3 */}
            <div className="certificate-card">
              <div className="certificate-image">
                <img src="/assets/certificate3.jpg" alt="React Certificate" />
                <div className="certificate-overlay">
                  <div className="certificate-info">
                    <h3>React Development</h3>
                    <p className="certificate-date">January 2024</p>
                    <p className="certificate-issuer">React University</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Certificate 4 */}
            <div className="certificate-card">
              <div className="certificate-image">
                <img src="/assets/certificate4.jpg" alt="Node.js Certificate" />
                <div className="certificate-overlay">
                  <div className="certificate-info">
                    <h3>Node.js Backend Development</h3>
                    <p className="certificate-date">December 2023</p>
                    <p className="certificate-issuer">Backend Masters</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Certificate 5 */}
            <div className="certificate-card">
              <div className="certificate-image">
                <img src="/assets/certificate5.jpg" alt="CSS Certificate" />
                <div className="certificate-overlay">
                  <div className="certificate-info">
                    <h3>CSS & Responsive Design</h3>
                    <p className="certificate-date">November 2023</p>
                    <p className="certificate-issuer">Design School</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Certificate 6 */}
            <div className="certificate-card">
              <div className="certificate-image">
                <img src="/assets/certificate6.jpg" alt="Database Certificate" />
                <div className="certificate-overlay">
                  <div className="certificate-info">
                    <h3>Database Management</h3>
                    <p className="certificate-date">October 2023</p>
                    <p className="certificate-issuer">Data Academy</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Certificate 7: Python Programming */}
            <div className="certificate-card">
              <div className="certificate-image">
                <img src="/assets/certificate7.jpg" alt="Python Programming Certificate" />
                <div className="certificate-overlay">
                  <div className="certificate-info">
                    <h3>Python Programming</h3>
                    <p className="certificate-date">September 2023</p>
                    <p className="certificate-issuer">Python Institute</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Certificate 8: Machine Learning */}
            <div className="certificate-card">
              <div className="certificate-image">
                <img src="/assets/certificate8.jpg" alt="Machine Learning Certificate" />
                <div className="certificate-overlay">
                  <div className="certificate-info">
                    <h3>Machine Learning Fundamentals</h3>
                    <p className="certificate-date">August 2023</p>
                    <p className="certificate-issuer">AI Academy</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Certificate 9: Cloud Computing */}
            <div className="certificate-card">
              <div className="certificate-image">
                <img src="/assets/certificate9.jpg" alt="Cloud Computing Certificate" />
                <div className="certificate-overlay">
                  <div className="certificate-info">
                    <h3>Cloud Computing with AWS</h3>
                    <p className="certificate-date">July 2023</p>
                    <p className="certificate-issuer">Cloud University</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Certificate 10: DevOps Engineering */}
            <div className="certificate-card">
              <div className="certificate-image">
                <img src="/assets/certificate10.jpg" alt="DevOps Engineering Certificate" />
                <div className="certificate-overlay">
                  <div className="certificate-info">
                    <h3>DevOps Engineering</h3>
                    <p className="certificate-date">June 2023</p>
                    <p className="certificate-issuer">DevOps Masters</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Certificate 11: Mobile Development */}
            <div className="certificate-card">
              <div className="certificate-image">
                <img src="/assets/certificate11.jpg" alt="Mobile Development Certificate" />
                <div className="certificate-overlay">
                  <div className="certificate-info">
                    <h3>Mobile App Development</h3>
                    <p className="certificate-date">May 2023</p>
                    <p className="certificate-issuer">Mobile Academy</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Certificate 12: Cyber Security */}
            <div className="certificate-card">
              <div className="certificate-image">
                <img src="/assets/certificate12.jpg" alt="Cyber Security Certificate" />
                <div className="certificate-overlay">
                  <div className="certificate-info">
                    <h3>Cyber Security Essentials</h3>
                    <p className="certificate-date">April 2023</p>
                    <p className="certificate-issuer">Security Institute</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Achievement Stats */}
          <div className="achievement-stats">
            <div className="stat-card">
              <div className="stat-icon">
                <i className="fas fa-certificate"></i>
              </div>
              <div className="stat-number">6+</div>
              <div className="stat-label">Professional Certificates</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">
                <i className="fas fa-clock"></i>
              </div>
              <div className="stat-number">500+</div>
              <div className="stat-label">Hours of Learning</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">
                <i className="fas fa-trophy"></i>
              </div>
              <div className="stat-number">10+</div>
              <div className="stat-label">Achievements Unlocked</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-text">
              <p>&copy; 2026 Adarsh Jaiswal. All rights reserved.</p>
            </div>
            <div className="social-links">
              <a href="https://instagram.com/adar.xhevil" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="mailto:adarshjaiswalxadyo@gmail.com" className="social-link">
                <i className="fas fa-envelope"></i>
              </a>
              <a href="https://github.com/adarshjaiswalxadyo-spec" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Music Player */}
      <MusicPlayer />
    </>
  );
};

export default CertificatesPage;
