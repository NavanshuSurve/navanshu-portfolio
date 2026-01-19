import HeaderNav from "./HeaderNav";
import "./index.css";
import FallingText from "./FallingText/FallingText";

function Header(props) {
  return (<>
  
  <header>
      
      <FallingText
        text={`Imposter syndrome—a common psychological phenomenon that makes you feel like a fraud and doubt your abilities—can stop you in your tracks quickly. And according to research, it’s a very real condition, affecting a significant portion of the population across age groups and demographics. Ironically, it’s typically experienced by otherwise high-achieving individuals—like athletes—and can lead to feelings of anxiety and self-doubt, which can ultimately hold you back from your goals.`}
        highlightWords={[`Imposter syndrome`]}
        highlightClass="highlighted"
        trigger="click"
        backgroundColor="transparent"
        wireframes={false}
        gravity={0.56}
        fontSize="0.8rem"
        mouseConstraintStiffness={0.9}
      />
      
      <HeaderNav />
    </header>
  </>
    
  );
}

export default Header;
