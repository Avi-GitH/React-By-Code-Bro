import profilePic from './assets/profile_picture.jpg'

function Card() {
    return(
        <div className="card">
            <img className='card-image' src={profilePic} alt="Profile Picture" />
            <h2 className='card-title'>Abhishek Maharana</h2>
            <p className='card-text'>I am a react developer and <br /> I make pretty websites</p>
        </div>
    )
}

export default Card;
