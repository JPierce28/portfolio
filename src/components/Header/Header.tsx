import './Header.css'
import { useLocation } from 'react-router-dom'

const Header = () => {
    const location = useLocation()

    return (
        <header className='main-header'>
            {location.pathname !== '/tech-stack' && <button className='nav-btn'>Tech Stack</button>}
            {location.pathname !== '/projects' && <button className='nav-btn'>Projects</button>}
            {location.pathname !== '/about' && <button className='nav-btn'>About</button>}
            <button className='nav-btn'>Home</button>
        </header>
    )
}

export default Header;