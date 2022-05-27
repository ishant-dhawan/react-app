import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import AuthContext from '../../context/authContext';
import './navigation.css';

const Navigation = () => {
    const ctx = useContext(AuthContext);
    return ( 
            <nav>
                <NavLink className={ (navLink) => navLink.isActive ? 'active' : ''} to="/home">Home</NavLink>
                <NavLink className={ (navLink) => navLink.isActive ? 'active' : ''} to="/products">Products</NavLink>
                <button onClick={ctx.logOut}>LogOut</button>
            </nav>
    );
}

export default Navigation;