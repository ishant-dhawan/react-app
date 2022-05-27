import classes from './loader.module.css';

const Loader = () => {
    return  (<div className={classes['spinner-container']}>
                <div className={classes['loading-spinner']}>
                </div>
            </div>);
}

export default Loader;