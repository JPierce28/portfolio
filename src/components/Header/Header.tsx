import './Header.css'
import { useLocation, useNavigate } from 'react-router-dom'

const Header = () => {
    const location = useLocation()
    const navigate = useNavigate()

    return (
        <header className='main-header'>
            {location.pathname !== '/tech-stack' && <button onClick={() => navigate('/tech-stack')} className='nav-btn'>Tech Stack</button>}
            {location.pathname !== '/projects' && <button onClick={() => navigate('/projects')} className='nav-btn'>Projects</button>}
            {location.pathname !== '/about' && <button onClick={() => navigate('/about')} className='nav-btn'>About</button>}
            <button onClick={() => navigate('/')} className='nav-btn'>Home</button>
        </header>
    )
}

export default Header;