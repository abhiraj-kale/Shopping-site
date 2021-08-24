import React from 'react';
import {useParams} from "react-router-dom";

function Product(props) {
    let {product_id} = useParams()
    return (
        <div>
            This is the product page:
            <h1>Product no. {product_id}</h1>
        </div>
    );
}

export default Product;