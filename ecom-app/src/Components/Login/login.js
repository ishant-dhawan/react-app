import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../Loader/loader";
import LoginForm from "./LoginForm/login-form";
import './login.css';
import AuthContext from "../../context/authContext";

const Login = () => {
    const [isLoading , setLoading] = useState(false);
    const ctx = useContext(AuthContext);

    const navigate = useNavigate();

    const LoginHandler = (authenticated = false) => {
        setLoading(true);
        setTimeout(() => {
        if(authenticated) {
            ctx.logIn();
            navigate('/home');
        } }, 1000);
    };

    return ( <div className="login-container">
         {isLoading ? <Loader/> : <div className="login"><LoginForm auth={LoginHandler}/></div>}
    </div> );
}

export default Login;