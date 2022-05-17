import React, { useEffect } from "react";


const Products = () => {
    
    useEffect( () => {
        fetchHandler();
    }, []);
    
    const title = 'Fetch Products details';

    const fetchHandler = () => {
       fetch('https://fakestoreapi.com/products').then( response => {
           return response.json();
       }).then( console.log);
    }
    return (
    <>
        <p>{title}</p>
        <button onClick={fetchHandler}> Fetch</button>
    </>
    )

}

export default Products;