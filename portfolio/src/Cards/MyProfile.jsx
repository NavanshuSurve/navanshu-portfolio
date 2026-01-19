



function Card(){

    return(
        <ProfileCard
  name="Navanshu Surve"
  title="Student"
  handle="Navanshoe"
  status="Online"
  contactText="Instagram"
  avatarUrl={ProfilePic}
  showUserInfo={true}
  enableTilt={true}
  enableMobileTilt={false}
  onContactClick={() => console.log('Contact clicked')}
/>
    );
}
export default Card;