import './About.css'
import Header from '../Header/Header';
import { Link } from 'react-router-dom';

const About = () => {
  
  return (
    <section className='about-page'>
      <Header/>
      <section className='about-section'>
        <h1>About Me</h1>
        <section className='about-description'>
          <div className='image-container'>
            <img className='profile-picture' src='/images/JPicture.jpg'></img>
          </div>
          <div className='description-container'>
            <p>Hello, my name is Joshua Pierce and I am a frontend software developer! Some of my hobbies and interests include; Rock Climbing, Disc Golf, Basketball, Video Gaming, Hiking and of course coding. I am a recent graduate of the Turing School of Software and Design and am currently looking for a new company to call home. Follow my linkedIn and GitHub links below to stay up to date with my coding and personal life!</p>
            <Link to='https://www.linkedin.com/in/joshua-pierce-534137250'>LinkedIn</Link>
            <Link to='https://github.com/JPierce28'>GitHub</Link>
          </div>
      </section>
      </section>
    </section>
  )
}

export default About;