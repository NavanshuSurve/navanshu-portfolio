import React from "react";

import "./Projects.css";
import { Link } from "react-router-dom";

export default function Projects() {
  // Demo data for projects
  const demoProjects = [
    {
      id: 1,
      title: "AI-Powered File Sorting System",
      tag: "Python, TensorFlow, Watchdog, SQLite",
      description:
        "Developed an intelligent real-time file management system using Transfer Learning and Watchdog to automatically classify and organize files. Trained and integrated a custom deep learning model to predict destination folders based on file attributes with automated folder monitoring and relocation using multithreading and file I/O optimizations.",
      color: "var(--color-accent-1)",
    },
    {
      id: 2,
      title: "Plant Disease Detection using Deep Learning",
      tag: "PyTorch, TensorFlow, Keras, , Matplotlib",
      description:
        "Built a deep learning pipeline using PyTorch and TensorFlow for classification, achieving XX% accuracy on the PlantVillage dataset with advanced data augmentation and OpenCV-based preprocessing. Optimized model performance using transfer learning, Knowledge Distillation, Pruning, and Quantization-Aware Training, added explainability with Grad-CAM and attention maps.",
      color: "var(--color-accent-2)",
    },
    {
      id: 3,
      title: "RoadMaster – Smart Driving School Platform",
      tag: "MERN, javascript, html, css",
      description:
        "Built a full-stack web platform for driving schools that enables seamless lesson booking, real-time schedule management, secured Stripe-based payments, and personalized user dashboards. Implemented Google-based authentication using Firebase, role-based access control for Admin and Students, and developed an Admin dashboard to manage instructors, services, bookings, and customer reviews. Integrated dynamic calendar scheduling, automated booking storage with MongoDB, and optimized the platform for responsive performance and deployment via Firebase.",
      color: "var(--color-accent-3)",
    },
  ];

  return (
    <div>
      <Link to="/" className="home-link">
        Home
      </Link>
      <div className="projects-container">
        <h1 className="projects-heading">My Projects Portfolio </h1>

        <section className="projects-grid">
          {demoProjects.map((project) => (
            <article
              key={project.id}
              className="project-card"
              style={{
                // Using dynamic color variables from CSS for the top border flash
                borderTop: `5px solid ${project.color}`,
              }}
            >
              <h2 className="project-title">{project.title}</h2>
              <p className="project-tag">{project.tag}</p>
              <p className="project-description">{project.description}</p>
            </article>
          ))}
        </section>

        <p className="projects-footer">More projects coming soon!</p>
      </div>
    </div>
  );
}
