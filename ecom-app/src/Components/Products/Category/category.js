import { useEffect, useState } from 'react';
import classes from './category.module.css';

const Category = (props) => {

    const [isActive, setActive] = useState();

    useEffect( ()=> {
        setActive(props.selectedCategory === props.category);
    }, [props.selectedCategory])

    const getProducts = () => {
        setActive(props.selectedCategory === props.category);
        props.getCategory(props.category);
    }

    return (
        <div className={`${classes.category} ${isActive ? classes.active : ''} `} onClick={getProducts}>{props.category}</div>
    );

}

export default Category;