import classes from './input.module.css'

const Input = (props) => {
    

    return ( 
        <div className={classes['form-control']}>
            {/* <label htmlFor={props.id}>{props.label}</label> */}
            <input id={props.id} type={props.type} placeholder={props.label}/>
        </div>
    )

}

export default Input;