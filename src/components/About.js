import React from 'react';
import HeaderAbout from './HeaderAbout';
import image from '../images/aboutme.jpg';

const About = () => {


    return (
        <>
          <HeaderAbout/>
          <div className="about__container  container">
            <div className="about__image-container">

            </div>

            <div className="about__text-social--container">
              <div className="about__text-container">
              I am a front-end developer with audiovisual creation background.

              After some years working as a graphic designer, photographer and videographer I decided to reinvent myself as a front-end developer. I am passionate about constant learning so the dynamism of the digital world is perfect for me.  
              </div>
              <nav className="about__social-container--pc">
                    <ul>
                      <li><a className="social__icon" href="https://github.com/memematvaz" aria-label="linkedin" title="linkedin" alt="linkedin" rel="noopener noreferrer" target="_blank"><i className="fab fa-linkedin-in"></i></a></li>
                      <li><a className="social__icon" href="https://github.com/memematvaz" aria-label="github" title="github" alt="github" rel="noopener noreferrer" target="_blank"><i className="fab fa-github-alt"></i></a></li>
                      <li><a className="social__icon" href="https://twitter.com/mnemearie" aria-label="twitter" title="twitter" alt="twitter" rel="noopener noreferrer" target="_blank"><i className="fab fa-twitter"></i></a></li>
                      <li><a className="social__icon" href="https://www.instagram.com/mnemearie/" aria-label="instagram" title="instagram" alt="instagram" rel="noopener noreferrer" target="_blank"><i class="fab fa-instagram"></i></a></li>
                      <li><a className="social__icon" href="https://github.com/memematvaz" aria-label="medium" title="medium" alt="medium" rel="noopener noreferrer" target="_blank"><i class="fab fa-medium-m"></i></a></li>
                    </ul>
                </nav>

            </div>
            <div className="about__skills--container">
              <ul className="about__technical-skills">
                <h3 className="about__skills--title">Technical Skills</h3>
                <li>Website layout
                  <ul className="about__technical-skills--layout">
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>Flexbox</li>
                    <li>CSS Grid</li>
                    <li>SAAS</li>
                    <li>Bootstrap</li>
                  </ul>
                </li>
                <li>Javascript (ES6)</li>
                <li>Gulp</li>
                <li>Web services (APIs) from providers</li>
                <li>React
                  <ul className="about__technical-skills--react">
                      <li>Class components</li>
                      <li>Hooks</li>
                      <li>Reack Router</li>
                  </ul>
                </li>
                <li>Version control with Git.</li>
              </ul>
              <ul className="about__design-skills">
                <h3 className="about__skills--title">Design Skills</h3>
                <li>Photoshop</li>
                <li>Illustrator</li>
                <li>Adobe XD</li>
                <li>InDesign</li>
                <li>Premiere</li>
                <li>After effects</li>
                <li>Capture One</li>
              </ul>
              <ul className="about__soft-skills">
                <h3 className="about__skills--title">Soft Skills</h3>
                <li>Proactive</li>
                <li>Problem solving</li>
                <li>Creative and innovative</li>
                <li>Curious</li>
                <li>Teamwork</li>
                <li>Teleworking</li>
              </ul>
            </div>

          </div>

          <nav className="about__social-container">
                    <ul>
                            <li><a className="social__icon" href="https://github.com/memematvaz" aria-label="linkedin" title="linkedin" alt="linkedin" rel="noopener noreferrer" target="_blank"><i className="fab fa-linkedin-in"></i></a></li>
                            <li><a className="social__icon" href="https://github.com/memematvaz" aria-label="github" title="github" alt="github" rel="noopener noreferrer" target="_blank"><i className="fab fa-github-alt"></i></a></li>
                            <li><a className="social__icon" href="https://twitter.com/mnemearie" aria-label="twitter" title="twitter" alt="twitter" rel="noopener noreferrer" target="_blank"><i className="fab fa-twitter"></i></a></li>
                            <li><a className="social__icon" href="https://www.instagram.com/mnemearie/" aria-label="instagram" title="instagram" alt="instagram" rel="noopener noreferrer" target="_blank"><i class="fab fa-instagram"></i></a></li>
                            <li><a className="social__icon" href="https://github.com/memematvaz" aria-label="medium" title="medium" alt="medium" rel="noopener noreferrer" target="_blank"><i class="fab fa-medium-m"></i></a></li>
                    </ul>
                </nav>
        </>
  



  
  
  
    )
  }
  
  export default About;