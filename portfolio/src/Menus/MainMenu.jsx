import abstractTimekeeper from '../assets/Patterns/abstract-timekeeper.svg';
import FlowingMenu from './FlowingMenu'
import './MainMenu.css'
import About from '../pages/About';
import Contact from '../pages/Contact'
import Projects from '../pages/Projects'
import Resume from '../pages/Resume'
import FeedMyBrain from '../pages/FeedMyBrain';
function MainMenu(){
const demoItems = [
  { text: 'PROJECTS', image: abstractTimekeeper, component: Projects },
  { text: 'RESUME', image: 'https://picsum.photos/600/400?random=2', component: Resume },
  { text: 'CONTACT', image: 'https://picsum.photos/600/400?random=4', component: Contact },
  { text: 'ABOUT', image: 'https://picsum.photos/600/400?random=5', component: About },
  { text: 'FEEDMYBRAIN', image: 'https://picsum.photos/600/400?random=6', component: FeedMyBrain },
];



    return(<>
    
    <div className="MainMenu">
  <FlowingMenu items={demoItems} />
</div>
    </>)
}

export default MainMenu
