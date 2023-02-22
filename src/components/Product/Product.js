import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
  const { img, name,seller,price,stock } = props.product;

  return (
    <div className="product">
      <div>
        <img src={img} alt="" />
      </div>
      <div className="product-desc">
        <h4 className="product-name">{name}</h4>
        <p><small>by:{seller}</small></p>
        <p>${price}</p>
        <p><small>only {stock} left in stock - order soon</small></p>
        <button 
        className="main-button" 
        onClick={()=>props.handleButton(props.product)}
        >
          <FontAwesomeIcon icon={faShoppingCart} /> add to cart </button>
      </div>
    </div>
  );
};

export default Product;
