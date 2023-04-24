import './App.css';
import { Routes, Route } from 'react-router'
import Home from '../Home/Home'
import About from '../About/About'
import Tech from '../Tech/Tech'
import Projects from '../Projects/Projects'

function App() {
  return (
    <Routes>
      <Route path='' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/projects' element={<Projects/>}/>
      <Route path='/tech-stack' element={<Tech/>}/>
    </Routes>
  );
}

export default App;