import { Link, NavLink } from 'react-router-dom';
import './header.css';

const Header = () => {
    return ( <nav>
        <NavLink className={ (navLink) => navLink.isActive ? 'active' : ''} to="/home">Home</NavLink>
        <a href="/login">Login</a>
        <NavLink className={ (navLink) => navLink.isActive ? 'active' : ''} to="/products">Products</NavLink>
    </nav>);
}

export default Header;