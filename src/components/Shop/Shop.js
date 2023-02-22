import React, { useState } from "react";
import fakeData from "../../fakeData";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import "./Shop.css";

const Shop = () => {
  const data10 = fakeData.slice(0, 10);
  const [products, setProducts] = useState(data10);
  const [cart, setCart] = useState([])



  const handleButton = (product)=>{
    console.log("product is clicked",product)
    const newCart = [...cart,product]
    setCart(newCart)
  }

  return (
    <div className="shop-container">
      <div className="product-container">
        {products.map((product) => (
          <Product 
          handleButton={handleButton}
          product={product} />
        ))}
      </div>
      <div className="cart-container">
          <Cart cart={cart}/>


      </div>
    </div>
  );
};

export default Shop;
