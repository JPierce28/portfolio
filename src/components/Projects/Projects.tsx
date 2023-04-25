import { Link } from 'react-router-dom';
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
              <p>This was a group project in which the four of us were tasked to learn a new technology and create a react app implementing that technology. My group decided to learn TypeScript and create an app that allows a user to search and save albums!</p>
              <Link to='https://github.com/bkuhn2/Vinyl_Viewer'>Repo Link</Link>
              <Link to='https://vinylviewer.netlify.app/'>Deployment Link</Link>
            </div>
          </div>
          <div className='project-card'>
            <div className='project-image'>
              <img className='profile-picture' src='/images/hooper.png'></img>
            </div>
            <div className='project-description'>
              <p>This was a solo project where I was tasked to create a react app on my own using an api of my choosing. I created an HTML wireframe and component map. The intention was to allow a user to find their favorite basketball players and save their card.</p>
              <Link to='https://github.com/JPierce28/hooper-hobby'>Repo Link</Link>
              <Link to='https://hooper-hobby.vercel.app/'>Deployment Link</Link>
            </div>
          </div>
          <div className='project-card'>
            <div className='project-image'>
              <img className='profile-picture' src='/images/bookworm.png'></img>
            </div>
            <div className='project-description'>
              <p>This was the final group project of my Turing education. I worked with a group of 7 total developers, 3 frontend and 4 backend developers. We learned and implemented GraphQL and created an app that allows users to search and trade books with fellow users.</p>
              <Link to='https://github.com/Capstone-Bookworm/bookworm-fe'>Repo Link</Link>
              <Link to='https://bookworm-fe.vercel.app/'>Deployment Link</Link>
            </div>
          </div>
        </section>
      </section>
    </section>
  )
}

export default Projects;