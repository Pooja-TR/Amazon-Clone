import React from "react";
import { useStateValue } from "./StateProvider";

import "./Product.css";

function Product({ id, title, image, price, rating }) {

  //------------------------------------------------------------------------
  //const [state, setstate] = useState(initialState)
  //const [state, dispatch] = useStateValue(); 
  //when we do this and console log the action in the reducer.js file we 
  //get the details of which ever product we click (add to basket button)
  //------------------------------------------------------------------------

  const [{basket}, dispatch] = useStateValue();
  //when we do this and console log the action in the reducer.js  and store it in basket
  //we get the details of which ever product we click (add to basket button) 
  //and the basket populates on multiple clicks


  console.log("This is the basket >>", basket);

  const addToBasket = () => {
    //dispatch an action
    //dispatch the item to the data layer
    dispatch({
      //allows u to shoot data into the datalayer
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} alt="" />
      <button onClick={addToBasket}> Add to Basket</button>
    </div>
  );
}

export default Product;
