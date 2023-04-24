import './About.css'
import Header from '../Header/Header';

const About = () => {
  
  return (
    <section className='about-page'>
      <Header/>
      <h1>About Me</h1>
      <section className='about-description'>
        <div className='image-container'>
        </div>
        <div className='description-container'>
          <p>I will say things about myself here</p>
        </div>
      </section>
    </section>
  )
}

export default About;