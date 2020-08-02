import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { detailsProduct } from '../actions/productActions';

function ProductScreen(props) {
    const [qty, setQty] = useState(1);
    const productDetails = useSelector(state => state.productDetails);
    const { product, loading, error } = productDetails;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(detailsProduct(props.match.params.id));
        return () => {
            //
        };
    }, []);

    const handleAddToCart = () => {
        props.history.push("/cart/" + props.match.params.id + "?qty=" + qty)
    }
    return <div>
        <div className="back-to-result">
            <Link to="/">Back to result</Link>
        </div>
        {loading ? <div>Loading...</div> :
            error ? <div>{error}</div> :
                (

                    <div className="details">
                        <div className="details-image">
                            <img src={product.image} alt="product"></img>
                        </div>
                        <div className="details-info">
                            <ul>
                                <li>
                                    <h4>{product.name}</h4>
                                </li>
                                <li>
                                    {product.rating} Stars ({product.numReviews} Reviews)
                    </li>
                                <li>
                                    <b>${product.price}</b>
                                </li>
                                <li>
                        <div>
                                        {product.decrisiption}
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="details-action">
                            <ul>
                                <li>
                                    Price: <b>${product.price}</b>
                                </li>
                                <li>
                                    Status: {product.countInStock > 0 ? "In stock." : "Out of stock."}
                                </li>
                                <li>
                                    Qty: <input className="qty-input"
                                        value={qty}
                                        type="number"
                                        min="1"
                                        max={product.countInStock}
                                        onChange={(e) => { setQty(e.target.value) }}>

                                    </input>
                                </li>
                                <li>
                                    {product.countInStock > 0 && <button onClick={handleAddToCart} className="button primary">Add to Cart</button>}
                                </li>
                            </ul>
                        </div>
                    </div>
                )}
    </div>
}

export default ProductScreen;