import './Home.css'
import { useLocation } from 'react-router-dom';

const Home = () => {
  return (
    <section className='home-page'>
      <header className='main-header'>
        <button className='tech-btn'>Tech Stack</button>
        <h1>Hello there I am Josh</h1>
        <button className='projects-btn'>Projects</button>
      </header>
    </section>
  )
}

export default Home;