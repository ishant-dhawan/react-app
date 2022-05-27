import { useEffect, useReducer, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../../Input/input';
import Loader from '../../Loader/loader';
import classes from './login-form.module.css';

const ADD_USER = 'ADD_USER';
const INPUT_BLUR = 'INPUT_BLUR';

const userNameInitialValue = { value : '', isValid : false, isTouched: false};

const userNameReducer = (state, action) => {
    if(action.type === ADD_USER) {
        return { value : action.val, isValid : action.val.trim() !== '', isTouched: state.isTouched}
    }
    if(action.type === INPUT_BLUR) {
        return { value : state.value, isValid : state.value.trim() !== '', isTouched: action.touched}
    }
    return userNameInitialValue;
};

const LoginForm = (props) => {
    const [ userName, dispatchUserName] = useReducer(userNameReducer, userNameInitialValue);

   // const [enteredUserName, setUserName] = useState('');
   // const [isUserNameTouched, setUserNameTouched] = useState(false);

    //const [isUserNameValid, setUserNameValid] = useState(false);

    const [enteredPassword, setPassword] = useState('');
    //const [isPasswordValid, setPasswordValid] = useState(false);
    const [isPasswordTouched, setPasswordTouched] = useState(false);

    //const [isFormValid, setFormValid] = useState(null);
    
    //const enteredNameIsValid = userName.isValid;
    const nameIsInvalid =  !userName.isValid && userName.isTouched;

    const passwordIsValid = enteredPassword.length >= 8;
    const passwordIsInvalid = !passwordIsValid && isPasswordTouched;

    const isFormValid = userName.isValid && passwordIsValid;

    // useEffect( () => {
    //     setFormValid(enteredNameIsValid && passwordIsValid);
    // }, [enteredNameIsValid, passwordIsValid]);
   
 
    const passwordHandler = (event) => {
        //setPasswordTouched(true);
        dispatchUserName({type: INPUT_BLUR, touched: true});
        setPassword(event.target.value);  

        // if(event.target.value.length >= 8) {
        //     setPasswordValid(true);
        // }
    }

    const userNameHandler = (event) => {
       // setUserNameTouched(true);
       dispatchUserName({type: INPUT_BLUR, touched: true});
        dispatchUserName({type: ADD_USER, val: event.target.value})
       // setUserName(event.target.value);

        // if(event.target.value.trim() !== '') {
        //     setUserNameValid(true);
        // }
    }

    const userNameBlurHandler = () => {
       // setUserNameTouched(true);
        dispatchUserName({type: INPUT_BLUR, touched: true})
    }

    const passwordBlurHandler = () => {
        setPasswordTouched(true);
    }

    function submitHandler(event) {
        event.preventDefault();

       // setUserNameTouched(true);
       dispatchUserName({type: INPUT_BLUR, touched: true})
        setPasswordTouched(true);
        //props.auth(true);
        
        if(!userName.isValid) {
            return;
            //setUserNameValid(true);
        }

        if(!passwordIsValid) {
            return;
            //setPasswordValid(true);
        }

        //setFormValid(true);
        console.log(userName.value, enteredPassword);

        props.auth(true);

        //setUserName('');
        //setUserNameTouched(false);
        dispatchUserName();

        setPassword('');
        setPasswordTouched(false);
    }

    return (
        <form onSubmit={submitHandler} className={ `${classes.form} ${!isFormValid ? classes.invalid: ''}`}>
            {/* <Input type='text' id='userName' label='User Name'/>
            <Input type='password' id='password' label='Password'/> */}
            <div className={classes['form-control']}>
                <input type='text' id='userName' placeholder='User Name' value={userName.value} onChange={userNameHandler} onBlur={userNameBlurHandler}/>
                { nameIsInvalid && <div className={classes['error-text']}>Please enter User name</div>}
            </div>
            <div className={classes['form-control']}>
                <input type='password' id='password' placeholder='Password' value={enteredPassword} onChange={passwordHandler} onBlur={passwordBlurHandler}/>
                { passwordIsInvalid && <div className={classes['error-text']}>Password should have minimum 8 length</div>}
            </div>
            <div className={classes['form-control']}>
                <button className={classes['ml-10 ']}  type='submit' disabled={!isFormValid}>Login</button>
            </div>
        </form>

    );
};

export default LoginForm;