import Header from '../Header/Header';
import './Tech.css'

const Tech = () => {
  return (
    <section className='tech-stack-page'>
      <Header/>
      <section className='tech-page'>
        <h1>Technologies I've Used</h1>
        <section className='tech-stack-container'>
            <img className='technology' src='/images/javascript.png'></img>
            <img className='technology' src='/images/typescript.png'></img>
            <img className='technology' src='/images/css-icon.png'></img>
            <img className='technology' src='/images/sass.png'></img>
            <img className='technology' src='/images/html-icon.png'></img>
            <img className='technology' src='/images/graphql.png'></img>
            <img className='technology' src='/logo512.png'></img>
            <img className='technology' src='/images/cypress.png'></img>
            <img className='technology' src='/images/npm.png'></img>
        </section>
      </section>
    </section>
  )
}

export default Tech;