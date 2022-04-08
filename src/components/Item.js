import React, {useState} from "react";

function Item({ name, category }) {
const[isInCart, setIsInCart] = useState()
const itemClass = isInCart ? "in-cart" : ""
const btnClass = isInCart ? "remove" : "add"

function handleAddToCart() {
  setIsInCart(!isInCart)
}

  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={btnClass} onClick={handleAddToCart}> {isInCart ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
