import './Home.css'
import { useLocation, useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <section className='home-page'>
      <header className='home-header'>
        <h1>Joshua Pierce</h1>
        <h3>Frontend Software Developer</h3>
      </header>
      <div className='tech-stack'>
        {location.pathname !== '/about' && <button onClick={() => navigate('/tech-stack')} className='nav-btn'>Tech Stack</button>}
      </div>
      <div className='about-container'>
        <button onClick={() => navigate('/about')} className='nav-btn'>About</button>
      </div>
      <div className='projects-container'>
        <button onClick={() => navigate('/projects')} className='nav-btn'>Projects</button>
      </div>
    </section>
  )
}

export default Home;