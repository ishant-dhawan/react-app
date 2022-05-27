import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/home';
import Header from './Components/Header/header';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import Products from './Components/Products/products';
import Login from './Components/Login/login';
import AuthContext from './context/authContext';
import { useEffect, useState } from 'react';

function App() {

  const [isLoggedIn, setLoggedIn] = useState();
  const navigate = useNavigate();

  useEffect( () => {
    if(localStorage.getItem( 'isLoggedIn')) {
      setLoggedIn(true);
    }
  }, []);

  const LoginHandler = () => {
    localStorage.setItem( 'isLoggedIn', 1);
    setLoggedIn(true);
  }

  const LogOutHandler = () => {
    localStorage.removeItem( 'isLoggedIn');
    setLoggedIn(false);
    navigate('/login', {replace: true});
  }

  return (
    <AuthContext.Provider value={ 
      {
        isLoggedIn : isLoggedIn,
        logIn : LoginHandler,
        logOut : LogOutHandler
      }
    }>
    <div className="App">
      <Header/>
      <main>
        <Routes>
          <Route path="/" element={<Navigate to={isLoggedIn ? "/home": "/login"} />} />
          <Route path="/login" element={!isLoggedIn ? <Login /> : <Navigate to='/home' />} />
          <Route path="/home" element={ <Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="*" element={ <p>Not found</p>} />
        </Routes>
      </main>
    </div>
    </AuthContext.Provider>
  );
}

export default App;
