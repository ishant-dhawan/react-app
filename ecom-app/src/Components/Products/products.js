import React, { useCallback, useEffect, useState } from "react";
import { ReactDOM } from "react";
import Loader from "../Loader/loader";
import Category from "./Category/category";
import Product from "./Product/product";
import './products.css';

const Products = () => {
    const [productData, setProductData] = useState();
    const [categories, setCategories] = useState([]);
    const [isLoading , setLoading] = useState(false);
    const [allProducts, setAllProducts] = useState();
    const [selectedCategory, setSelectedCategory] = useState('All Products');
    const [isError, setError] = useState(false);
    //const title = 'Fetch Products details';
    //let allProducts = [];

    const fetchHandler = useCallback(() => {
       setError(false);
       setLoading(true);
       fetch('https://fakestoreapi.com/products').then( response => {
           if(!response.ok) {
               throw new Error('Something went wrong');
           }
           return response.json();
        }).
       then( data => {
            setLoading(false);
            console.log( data);
            setAllProducts(data);
            setProductData(data);
            const categories = [...new Set(data.map( d => d.category))];
            if(categories.length > 1) {
               categories.unshift('All Products');
            }
           setCategories(categories);
       }).catch( err => { 
           console.log(err);
           setLoading(false);
           setError(err.message);
        });
    }, []);

    useEffect( () => {
        const TITLE = 'Products';
        document.title = TITLE;
        fetchHandler();
    }, [fetchHandler]);

    let content = !isError && isLoading && <Loader/>;
    let products = <p></p>;

    
    const getProducts= useCallback((category) => {
        console.log(category);
        setSelectedCategory(category);
        let product = allProducts;
        if(category !== 'All Products') {
            product = [...new Set(allProducts.filter( d => d.category === category))];
        }
        console.log(product);
        setProductData(product);
    });

    if(isError && !isLoading) {
        content = isError;
    }

    if(categories.length > 0) {
        content = <div className="category-container">
            {categories.map( (data,idx) => <Category category={data} key={idx} getCategory={getProducts} selectedCategory={selectedCategory}/>)}
        </div>
    }

    if(productData?.length > 0) {
        products = <><p><strong>Products : {productData.length}</strong></p>
        <div className="product-container">
            {productData.map( data => <Product product={data} key={data.id}/>)}
        </div></>
    }

    if(productData?.length === 0) {
        content = <p>No products found</p>;
    }

    return (<>{content} {products}</>);

}

export default Products;