import { useContext, useEffect } from 'react';
import AuthContext from '../../context/authContext';
import Navigation from '../Navigation/navigation';
import './header.css';

const Header = () => {
    let isLoggedIn = false;
    const ctx = useContext(AuthContext);

    useEffect( ()=> {
        isLoggedIn = localStorage.getItem('isLoggedIn') ? true : false;
    }, []);

    return ( 
    <div className='header-container'>
        <h2>ClipKart</h2>
        {ctx.isLoggedIn && <Navigation />}
    </div>
    );
}

export default Header;