import { useState } from "react";
import AnimateASCII from "./ASCIIusage"; 
import {Link} from "react-router-dom";


function HomeContent() {
  return <AnimateASCII content="HOME" />; 
}

function AboutContent() {
  return <AnimateASCII content="ABOUT" />;
}

function GitHubContent() {
  return <AnimateASCII content="GITHUB" />;
}

function LinkedInContent() {
  return <AnimateASCII content="LINKEDIN" />;
}

function HeaderNav() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const items = [
    { name: "Home", component: <HomeContent />,path:"/"  },
    { name: "About", component: <AboutContent />, path:"/about"},
    { name: "GitHub", component: <GitHubContent />,path:"https://github.com/NavanshuSurve" },
    { name: "LinkedIn", component: <LinkedInContent />, path:"https://www.linkedin.com/in/navanshu-surve-47600b293"},
  ];

  return (
    <div className="info-div">
      <ul className="info">
        {items.map((item, index) => (
          <li key={index}>
            {item.path.startsWith("http")?(<a
              href={item.path}
              target="_blank"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {item.name}
            </a>):
            (<Link
            to={item.path}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
        >  
        {item.name}
            </Link>
        )}
          </li>
        ))}
      </ul>

      <div
        style={{
          backgroundColor: "red",
          marginTop: "20px",
          textAlign: "center",
        }}
      >
        {hoveredIndex !== null ? items[hoveredIndex].component :null}
      </div>
    </div>
  );
}

export default HeaderNav;
