import React from 'react';
import './Resume.css';

export default function Resume() {
    const resumeData = {
        name: "NAVANSHU SURVE",
        title: "Computer Science Student | AI/ML Enthusiast",
        contact: {
            email: "navanshu.surve1111@gmail.com",
            linkedin: "LinkedIn",
            github: "GitHub",
            leetcode: "LeetCode"
        },
        education: {
            school: "University Of Petroleum And Energy Studies",
            degree: "B.Tech in Computer Science",
            specialization: "Specialization in AI/ML",
            dates: "September 2023 - March 2027",
            location: "Dehradun, India",
        },
        experience: [
            {
                role: "Summer Intern",
                company: "CRMLabs",
                dates: "June 2025 - July 2025",
                location: "Pune",
                details: [
                    "Completed a structured, multi-module Salesforce training program covering data modeling, security, Lightning components, validation rules, and deployment.",
                    "Gained hands-on experience with Salesforce as a cloud-based CRM platform, working with cloud-hosted data models, automation tools, and multi-environment deployments using Sandboxes.",
                    "Earned 17+ Trailhead Badges on Salesforce Trailblazer, demonstrating continuous learning and platform expertise.",
                ],
            },
            {
                role: "Summer Intern",
                company: "Child Help Foundation",
                dates: "June 2024 - July 2024",
                location: "Mumbai",
                details: [
                    "Conducted weekly interactive learning sessions for children, focusing on foundational subjects, digital literacy, and creative expression.",
                    "Collaborated with the NGO's core team to revamp their website using the MERN stack (MongoDB, Express.js, React, Node.js), improving user experience and mobile responsiveness.",
                    "Implemented dynamic content sections and donation form integrations, helping streamline outreach and engagement through the web platform.",
                ],
            },
        ],
        projects: [
            {
                title: "Inventory Prediction using Linear Regression",
                tools: "Python, NumPy, Pandas, Scikit-learn",
                date: "June 2025",
                details: [
                    "Developed a machine learning model to forecast inventory demand using Linear Regression, improving stock planning accuracy.",
                    "Applied feature engineering techniques to extract key predictors like sales velocity, seasonality, and historical demand trends.",
                    "Utilized Pandas, NumPy, and Scikit-learn for data preprocessing, training, and visualization.",
                ],
            },
            {
                title: "Library Management System",
                tools: "Java, Swing, MySQL",
                date: "May 2025",
                details: [
                    "Designed and implemented a full-featured Library Management System using Java Swing for GUI and MySQL for persistent storage.",
                    "Applied core Object-Oriented Programming (OOP) principles to structure classes for books, users, and transactions.",
                    "Enabled functionalities like book issuance, return tracking, member registration, and fine calculation with live database updates.",
                ],
            },
            {
                title: "File Organization System through Machine Learning",
                tools: "Python, NumPy, Ollama, Watchdog",
                date: "March 2025",
                details: [
                    "Built an intelligent file organization tool using Python, capable of auto-sorting files into folders based on filename similarity.",
                    "Embedded file names and used cosine similarity with Pandas and OS module for smart classification.",
                    "Leveraged Watchdog, Requests, Llama 3.2, and event tracking to monitor and auto-organize files in real time.",
                ],
            },
        ],
        skills: {
            languages: ["Python", "Java", "JavaScript", "CSS"],
            frameworks: ["React.js", "Node.js", "OpenCV", "Streamlit"],
            tools: ["Git", "GitHub", "MySQL", "MongoDB", "VS Code", "Postman"],
            coursework: ["Data Structures and Algorithms", "Object Oriented Programming", "Artificial Intelligence and Machine Learning", "Operating Systems", "Database Management System"],
        }
    };

    return (
        <div className="resume-page-container">
            {/* Header Section */}
            <header className="resume-header">
                <div className="header-gradient-overlay"></div>
                <h1 className="name-heading">{resumeData.name}</h1>
                <p className="title-subheading">{resumeData.title}</p>
                <div className="contact-links">
                    <a href={`mailto:${resumeData.contact.email}`} className="contact-link">
                        📧 Email
                    </a>
                    <span className="divider">|</span>
                    <a href="#" className="contact-link">🔗 {resumeData.contact.linkedin}</a>
                    <span className="divider">|</span>
                    <a href="#" className="contact-link">💻 {resumeData.contact.github}</a>
                    <span className="divider">|</span>
                    <a href="#" className="contact-link">🏆 {resumeData.contact.leetcode}</a>
                </div>
            </header>

            <main className="resume-body">
                {/* EDUCATION */}
                <section className="section-block">
                    <h2 className="section-heading">
                        <span className="heading-icon">🎓</span>
                        EDUCATION
                    </h2>
                    <div className="content-card">
                        <div className="card-header">
                            <h3 className="item-title">{resumeData.education.school}</h3>
                            <span className="item-dates">{resumeData.education.dates}</span>
                        </div>
                        <p className="item-subtitle">{resumeData.education.degree}</p>
                        <p className="item-specialization">{resumeData.education.specialization}</p>
                        <p className="item-location">📍 {resumeData.education.location}</p>
                    </div>
                </section>

                {/* EXPERIENCE */}
                <section className="section-block">
                    <h2 className="section-heading">
                        <span className="heading-icon">💼</span>
                        EXPERIENCE
                    </h2>
                    {resumeData.experience.map((exp, index) => (
                        <div key={index} className="content-card">
                            <div className="card-header">
                                <div>
                                    <h3 className="item-title">{exp.company}</h3>
                                    <p className="item-subtitle">{exp.role}</p>
                                </div>
                                <div className="card-meta">
                                    <span className="item-dates">{exp.dates}</span>
                                    <span className="item-location">📍 {exp.location}</span>
                                </div>
                            </div>
                            <ul className="details-list">
                                {exp.details.map((detail, idx) => (
                                    <li key={idx}>{detail}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </section>

                {/* PROJECTS */}
                <section className="section-block">
                    <h2 className="section-heading">
                        <span className="heading-icon">🚀</span>
                        PROJECTS
                    </h2>
                    {resumeData.projects.map((proj, index) => (
                        <div key={index} className="content-card project-card">
                            <div className="card-header">
                                <h3 className="item-title">{proj.title}</h3>
                                <span className="project-date">{proj.date}</span>
                            </div>
                            <p className="project-tools">
                                <strong>Tools:</strong> {proj.tools}
                            </p>
                            <ul className="details-list">
                                {proj.details.map((detail, idx) => (
                                    <li key={idx}>{detail}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </section>

                {/* SKILLS */}
                <section className="section-block">
                    <h2 className="section-heading">
                        <span className="heading-icon">⚡</span>
                        SKILLS
                    </h2>
                    <div className="skills-container">
                        <div className="skill-category">
                            <h4 className="skill-category-title">Languages</h4>
                            <div className="skill-tags">
                                {resumeData.skills.languages.map((lang, idx) => (
                                    <span key={idx} className="skill-tag">{lang}</span>
                                ))}
                            </div>
                        </div>
                        <div className="skill-category">
                            <h4 className="skill-category-title">Frameworks & Libraries</h4>
                            <div className="skill-tags">
                                {resumeData.skills.frameworks.map((fw, idx) => (
                                    <span key={idx} className="skill-tag">{fw}</span>
                                ))}
                            </div>
                        </div>
                        <div className="skill-category">
                            <h4 className="skill-category-title">Tools & Platforms</h4>
                            <div className="skill-tags">
                                {resumeData.skills.tools.map((tool, idx) => (
                                    <span key={idx} className="skill-tag">{tool}</span>
                                ))}
                            </div>
                        </div>
                        <div className="skill-category">
                            <h4 className="skill-category-title">Coursework</h4>
                            <div className="skill-tags">
                                {resumeData.skills.coursework.map((course, idx) => (
                                    <span key={idx} className="skill-tag">{course}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Download Button */}
            <div className="resume-download">
                <button className="download-btn">
                    📥 Download Resume
                </button>
            </div>
        </div>
    );
}