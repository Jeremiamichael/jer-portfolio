import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { FaInstagram, FaLinkedin, FaEnvelope, FaPhone, FaUniversity, FaMapMarkerAlt } from 'react-icons/fa';

export const Contact = () => {
  const profileInfo = {
    name: "Jeremia Johanes Mikhael Paulus",
    title: "Software Engineer, Systems Analyst, UI&UX Designer",
    university: "Universitas Bina Nusantara",
    location: "Jakarta, Indonesia",
    email: "jeremia.mjp@gmail.com",
    phone: "+62 812-9719-5936",
    whatsapp: "https://wa.me/+6281297195936",
    social: {
      instagram: "https://instagram.com/jeremiamchael", 
      linkedin: "https://www.linkedin.com/in/jeremiajohanesmikhaelpaulus/"
    }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <div className="profile-card">
                    <h2>Get in touch</h2>
                    <div className="profile-info">
                      <h3 className="profile-name">{profileInfo.name}</h3>
                      <p className="profile-title">{profileInfo.title}</p>
                      
                      <div className="profile-details">
                        <div className="profile-item">
                          <FaUniversity className="profile-icon" />
                          <span>{profileInfo.university}</span>
                        </div>
                        
                        <div className="profile-item">
                          <FaMapMarkerAlt className="profile-icon" />
                          <span>{profileInfo.location}</span>
                        </div>
                        
                        <div className="profile-item">
                          <FaEnvelope className="profile-icon" />
                          <a href={`mailto:${profileInfo.email}`} className="profile-link">
                            {profileInfo.email}
                          </a>
                        </div>
                        
                        <div className="profile-item">
                          <FaPhone className="profile-icon" />
                          <a href={profileInfo.whatsapp} target="_blank" rel="noopener noreferrer" className="profile-link">
                            {profileInfo.phone}
                          </a>
                        </div>
                      </div>
                      
                      <div className="social-links">
                        <a 
                          href={profileInfo.social.instagram} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="social-link instagram"
                        >
                          <FaInstagram />
                          <span>Instagram</span>
                        </a>
                        
                        <a 
                          href={profileInfo.social.linkedin} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="social-link linkedin"
                        >
                          <FaLinkedin />
                          <span>LinkedIn</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
