import Header from '../Header/Header';
import './Projects.css'

const Projects = () => {
  return (
    <section className='projects-page'>
      <Header/>
      <h1>My Projects</h1>
      <section className='projects-container'>
        <div className='project-card'>
          <div className='project-image'>
            <img className='profile-picture' src=''></img>
          </div>
          <div className='project-description'>
            <p>description here</p>
          </div>
        </div>
        <div className='project-card'>
          <div className='project-image'>
            <img className='profile-picture' src=''></img>
          </div>
          <div className='project-description'>
            <p>description here</p>
          </div>
        </div>
        <div className='project-card'>
          <div className='project-image'>
            <img className='profile-picture' src=''></img>
          </div>
          <div className='project-description'>
            <p>description here</p>
          </div>
        </div>
      </section>
    </section>
  )
}

export default Projects;