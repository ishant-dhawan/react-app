import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/home';
import Header from './Components/Header/header';
import { Route, Routes } from 'react-router-dom';
import Products from './Components/Products/products';

function App() {
  return (
    <div className="App">
      <Header/>
      
      <main>
        <Routes>
          <Route path="/" element={ <p>Welcome to Ecom portal</p>} />
          <Route path="/home" element={ <Home />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </main>
      

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
