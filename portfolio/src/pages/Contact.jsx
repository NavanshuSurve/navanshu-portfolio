
import './Contact.css'
import Particles from '../Backgrounds/Particle.jsx'
export default function Contact() {
    const contactData = {
        email: "navanshu.surve1111@gmail.com",
        linkedin: "https://www.linkedin.com/in/navanshu-surve-47600b293", 
        github: "https://github.com/NavanshuSurve",      
        leetcode: "https://leetcode.com/u/Navanshu11"    
    };

    return (
        
        <div className="contact-page-container">
            
            <h1 className="contact-heading">📞 Get In Touch</h1>
            <p className="contact-subheading">I'm currently seeking internship opportunities and collaborations. Feel free to connect!</p>

            <section className="contact-details-section">
                 
                <div className="contact-cards-grid">
                    <div className="contact-card">
                        <div className="contact-icon">📧</div>
                        <h3>Email</h3>
                        <a href={`mailto:${contactData.email}`} className="contact-link">
                            {contactData.email}
                        </a>
                    </div>

                    <div className="contact-card">
                        <div className="contact-icon">🔗</div>
                        <h3>LinkedIn</h3>
                        <a href={contactData.linkedin} target="_blank" rel="noopener noreferrer" className="contact-link">
                            Connect with me
                        </a>
                    </div>

                    <div className="contact-card">
                        <div className="contact-icon">💻</div>
                        <h3>GitHub</h3>
                        <a href={contactData.github} target="_blank" rel="noopener noreferrer" className="contact-link">
                            View my code
                        </a>
                    </div>

                    <div className="contact-card">
                        <div className="contact-icon">🏆</div>
                        <h3>LeetCode</h3>
                        <a href={contactData.leetcode} target="_blank" rel="noopener noreferrer" className="contact-link">
                            Check my progress
                        </a>
                    </div>
                </div>
            </section>

            <div className="contact-footer">
                <p>Looking forward to hearing from you! 🚀</p>
            </div>
        </div>
    );
}