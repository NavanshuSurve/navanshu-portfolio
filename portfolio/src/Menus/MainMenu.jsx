import abstractTimekeeper from '../assets/Patterns/abstract-timekeeper.svg';
import FlowingMenu from './FlowingMenu'
import InfiniteMenu from './InfiniteMenu'
import './MainMenu.css'
import About from '../pages/About';
import Contact from '../pages/Contact'
import Projects from '../pages/Projects'
import Resume from '../pages/Resume'
import FeedMyBrain from '../pages/FeedMyBrain';
function MainMenu(){
const demoItems = [
  { link:'/projects',text: 'PROJECTS', image: abstractTimekeeper, component: Projects },
  { link:'/resume',text: 'RESUME', image: 'abstractTimekeeper', component: Resume },
  { link:'/contact',text: 'CONTACT', image: 'abstractTimekeeper', component: Contact },
  { link:'/about',text: 'ABOUT', image: 'abstractTimekeeper', component: About },
  { link:'/feedmybrain',text: 'FEEDMYBRAIN', image: 'abstractTimekeeper', component: FeedMyBrain },
];



    return(<>
    
    <div className="MainMenu">
  <FlowingMenu items={demoItems} />
</div>
    </>)
}

export default MainMenu
