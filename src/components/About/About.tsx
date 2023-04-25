import './About.css'
import Header from '../Header/Header';

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
            <p>I will say things about myself here</p>
          </div>
      </section>
      </section>
    </section>
  )
}

export default About;