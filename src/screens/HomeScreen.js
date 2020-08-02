import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { listProducts } from '../actions/productActions';
import Slider from '../comps/Slider';

function HomeScreen(props) {
    const productList = useSelector(state => state.productList);
    const { products, loading, error } = productList;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(listProducts());
        return () => {
            //
        };
    }, []);
    return loading ? <div>Loading...</div> :
        error ? <div>{error}</div> :
            <div>
                {/*<div className="section2">
                    <h1>Tech Specs</h1>
                    <img width="1000rem" src={ require('../483642_108.jpg') } />
</div>*/}
                <ul className="products">
                    {
                        products.map(product =>
                            <li key={product._id}>
                                <Link to={'/product/' + product._id}><div className="product">
                                    <img className="product-image" src={product.image} alt="product" />
                                    <div className="product-name">{product.name}</div>
                                    <div className="product-description">{product.description}</div>
                                    <div className="product-price">{product.price}$</div>
                                    {/*<div className="product-rating">{product.rating} Stars ({product.numReviews} Reviews)</div>*/}
                                </div></Link>
                            </li>
                        )
                    }
                </ul>
                {/*<div>
                    <Slider />
                </div>*/}
            </div>
}

export default HomeScreen;