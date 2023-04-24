import './Home.css'
import { Routes, Route } from 'react-router'
import About from '../About/About'
import Tech from '../Tech/Tech'
import Projects from '../Projects/Projects'

const Home = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/projects' element={<Projects/>}/>
      <Route path='/tech-stack' element={<Tech/>}/>
    </Routes>
  )
}

export default Home;