import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import "./FlowingMenu.css";

export default function FlowingMenu({
  items = [],
  speed = 15,
  textColor = "#fff",
  borderColor = "#fff",
  marqueeBgColor = "transparent",
  marqueeTextColor = "#060010",
  className = "",
}) {
  return (
    <nav className={`menu ${className}`}>
      {items.map((item, idx) => (
        <MenuItem
          key={idx}
          {...item}
          speed={speed}
          textColor={textColor}
          borderColor={borderColor}
          marqueeBgColor={marqueeBgColor}
          marqueeTextColor={marqueeTextColor}
        />
      ))}
    </nav>
  );
}

function MenuItem({
  link,
  text,
  image,
  speed,
  textColor,
  borderColor,
  marqueeBgColor,
  marqueeTextColor,
}) {
  const itemRef = useRef(null);
  const marqueeRef = useRef(null);
  const marqueeInnerRef = useRef(null);
  const animationRef = useRef(null);
  const [repetitions, setRepetitions] = useState(4);

  const animationDefaults = { duration: 0.6, ease: "expo" };

  const dist = (x1, y1, x2, y2) => {
    const dx = x1 - x2;
    const dy = y1 - y2;
    return dx * dx + dy * dy;
  };

  const closestEdge = (x, y, w, h) =>
    dist(x, y, w / 2, 0) < dist(x, y, w / 2, h) ? "top" : "bottom";

  // 🔁 Calculate repetitions based on viewport
  useEffect(() => {
    const calculate = () => {
      const part = marqueeInnerRef.current?.querySelector(".marquee__part");
      if (!part) return;

      const needed = Math.ceil(window.innerWidth / part.offsetWidth) + 2;
      setRepetitions(Math.max(4, needed));
    };

    calculate();
    window.addEventListener("resize", calculate);
    return () => window.removeEventListener("resize", calculate);
  }, [text, image]);

  // 🎞️ Setup marquee animation
  useEffect(() => {
    const part = marqueeInnerRef.current?.querySelector(".marquee__part");
    if (!part) return;

    animationRef.current?.kill();

    animationRef.current = gsap.to(marqueeInnerRef.current, {
      x: -part.offsetWidth,
      duration: speed,
      ease: "none",
      repeat: -1,
    });

    return () => animationRef.current?.kill();
  }, [repetitions, speed, text, image]);

  const animateIn = (e) => {
    const rect = itemRef.current.getBoundingClientRect();
    const edge = closestEdge(
      e.clientX - rect.left,
      e.clientY - rect.top,
      rect.width,
      rect.height
    );

    gsap
      .timeline({ defaults: animationDefaults })
      .set(marqueeRef.current, { y: edge === "top" ? "-101%" : "101%" })
      .set(marqueeInnerRef.current, {
        y: edge === "top" ? "101%" : "-101%",
      })
      .to([marqueeRef.current, marqueeInnerRef.current], { y: "0%" });
  };

  const animateOut = (e) => {
    const rect = itemRef.current.getBoundingClientRect();
    const edge = closestEdge(
      e.clientX - rect.left,
      e.clientY - rect.top,
      rect.width,
      rect.height
    );

    gsap
      .timeline({ defaults: animationDefaults })
      .to(marqueeRef.current, {
        y: edge === "top" ? "-101%" : "101%",
      })
      .to(marqueeInnerRef.current, {
        y: edge === "top" ? "101%" : "-101%",
      });
  };

  return (
    <a
      href={link}
      ref={itemRef}
      className="menu__item"
      style={{ borderColor }}
      onMouseEnter={animateIn}
      onMouseLeave={animateOut}
    >
      <span className="menu__item-link" style={{ color: textColor }}>
        {text}
      </span>

      <div
        className="marquee"
        ref={marqueeRef}
        style={{ backgroundColor: marqueeBgColor }}
        aria-hidden="true"
      >
        <div className="marquee__inner-wrap">
          <div className="marquee__inner" ref={marqueeInnerRef}>
            {Array.from({ length: repetitions }).map((_, i) => (
              <div
                className="marquee__part"
                key={i}
                style={{ color: marqueeTextColor }}
              >
                <span>{text}</span>
                <div
                  className="marquee__img"
                  style={{ backgroundImage: `url(${image})` }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </a>
  );
}
