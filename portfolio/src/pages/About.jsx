import React from 'react';
import ProfileCard from '../Cards/ProfileCard';
import ProfilePic from '../assets/ProfilePic.jpg';
import './About.css';

function About() {
    const introText = "I am a B.Tech student at UPES, specializing in Artificial Intelligence and Machine Learning. With hands-on experience in the MERN stack and Salesforce, my passion lies in developing intelligent systems and solving complex problems, from predicting inventory demand using Linear Regression to building full-stack applications. I thrive on continuous learning and applying core Computer Science principles in real-world scenarios.";

    const highlights = [
        {
            icon: "🤖",
            title: "AI/ML Enthusiast",
            description: "Inventory Prediction, File Organization Systems, Deep Learning Pipelines"
        },
        {
            icon: "💻",
            title: "Full-Stack Developer",
            description: "MERN Stack, Web Revamping, Real-time Applications"
        },
        {
            icon: "📚",
            title: "CS Fundamentals",
            description: "Data Structures & Algorithms, Object-Oriented Programming in Java"
        }
    ];

    const stats = [
        { label: "Projects Completed", value: "10+" },
        { label: "Technologies", value: "15+" },
        { label: "Certifications", value: "17+" },
        { label: "Experience", value: "2 Years" }
    ];

    return (
        <main className="about-page-container">
            {/* Profile Card Section */}
            <div className="card-wrapper">
                <ProfileCard
                    name="Navanshu Surve"
                    title="AI/ML Developer | Student"
                    handle="navanshoe"
                    status="Online"
                    contactText="Instagram"
                    avatarUrl={ProfilePic}
                    showUserInfo={true}
                    enableTilt={true}
                    enableMobileTilt={true}
                    onContactClick={() => console.log('Contact clicked')}
                />
            </div>

            {/* About Content Section */}
            <div className="about-content">
                <div className="about-header">
                    <h1 className="about-heading">About Me</h1>
                    <div className="heading-underline"></div>
                </div>

                <p className="about-description">{introText}</p>

                {/* Stats Section */}
                <div className="stats-grid">
                    {stats.map((stat, index) => (
                        <div key={index} className="stat-card">
                            <div className="stat-value">{stat.value}</div>
                            <div className="stat-label">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* Highlights Section */}
                <div className="highlights-section">
                    <h3 className="section-subtitle">What I Do Best</h3>
                    <div className="highlights-grid">
                        {highlights.map((highlight, index) => (
                            <div key={index} className="highlight-card">
                                <div className="highlight-icon">{highlight.icon}</div>
                                <h4 className="highlight-title">{highlight.title}</h4>
                                <p className="highlight-description">{highlight.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Call to Action */}
                <div className="cta-section">
                    <p className="cta-text">Let's build something amazing together! 🚀</p>
                    <button className="cta-button">Get In Touch</button>
                </div>
            </div>
        </main>
    );
}

export default About;