import Header from '../Header/Header';
import './Projects.css'

const Projects = () => {
  return (
    <section className='projects-page'>
      <Header/>
      <section className='my-projects-page'>
      <h1>My Projects</h1>
        <section className='project-container'>
          <div className='project-card'>
            <div className='project-image'>
              <img className='profile-picture' src='/images/vinyl.png'></img>
            </div>
            <div className='project-description'>
              <p>description here</p>
            </div>
          </div>
          <div className='project-card'>
            <div className='project-image'>
              <img className='profile-picture' src='/images/hooper.png'></img>
            </div>
            <div className='project-description'>
              <p>description here</p>
            </div>
          </div>
          <div className='project-card'>
            <div className='project-image'>
              <img className='profile-picture' src='/images/bookworm.png'></img>
            </div>
            <div className='project-description'>
              <p>description here</p>
            </div>
          </div>
        </section>
      </section>
    </section>
  )
}

export default Projects;