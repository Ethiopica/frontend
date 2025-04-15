import React, { useState } from "react";
import "./Book.css";
const BookCard = ({title, author, price, genre, inStock, isFavorite }) => {

  /*const [isFavorite, setIsFavorite] = useState(false);

  const clickHandler = () => {
    setIsFavorite(!isFavorite);
  }; */

  const eventHandler = () => {
    console.log("You clicked");
  }
    return (
       <div className="bookCard">
        <h2>{title} </h2>
        {/* <p onClick={clickHandler}> */}
          
        <p> {isFavorite ? "💚" : "💙" }  </p>
        <p>{author}</p>
        <p>{price}</p>
        <p>{genre } </p>
        <p> {inStock ? "In Stock" : "Out of Stock"}</p>
        {!inStock && <button onClick={eventHandler}> Add to Wish List</button>}
        {}
        </div>
    );
  };
  export default BookCard;

  // this one is destructured//