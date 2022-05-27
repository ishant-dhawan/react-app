import classes from './product.module.css';

const Product = (props) => {

    function seeProductDetails() {
        alert('clicked');
    }

    
    return ( 
        <div className={classes['product-tile']} onClick={seeProductDetails}>
            <div>{props.product.title}</div>
            <div className={classes['img-container']}>
                <img className={classes['product-image']} src={props.product.image} title={props.product.title} />
            </div>
            <div className={`${classes['mb-5']} ${classes['product-desc']}`}> {props.product.description}</div>
            
            <div className={classes['mb-5']}>
                <div> <strong>Category: </strong>{props.product.category}</div>
                <div> <strong>Price: </strong> ${props.product.price}</div>
            </div>
            <button className={classes['add-btn']}><strong>Add to Cart</strong></button>
        </div>
    )

}

export default Product;