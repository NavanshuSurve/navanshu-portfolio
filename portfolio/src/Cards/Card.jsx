import './Card.css'
import ProfilePic from '../assets/ProfilePic.jpg';
function Card(){

    return(
        <div className="Card">
            <img src={ProfilePic}></img>
            <h1 className="profile-name">About Me</h1>
            <p>
                <ul>
                    <li>WRITER</li>
                    <li>DEVELOPER</li>
                    <li>TRAVELER</li>
                </ul>
            </p>


        </div>
    );
}
export default Card;