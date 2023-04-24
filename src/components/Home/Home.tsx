import './Home.css'
import Header from '../Header/Header';
import { useLocation, useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const techDirect = () => {
    navigate('/tech-stack')
  }

  const projectsDirect = () => {
    navigate('/projects')
  }

  const aboutDirect = () => {
    navigate('/about')
  }


  return (
    <section className='home-page'>
      <header className='main-header'>
        <h1>Hello I'm Josh mofucka</h1>
      </header>
      <div className='tech-stack'>
        {location.pathname !== '/about' && <button onClick={techDirect} className='nav-btn'>Tech Stack</button>}
      </div>
      <div className='about-container'>
        <button onClick={aboutDirect} className='nav-btn'>About</button>
      </div>
      <div className='projects-container'>
        <button onClick={projectsDirect} className='nav-btn'>Projects</button>
      </div>
    </section>
  )
}

export default Home;