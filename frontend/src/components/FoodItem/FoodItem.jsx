import React, { useContext } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext';

const FoodItem = ({id, name, price, description, image}) => {

  const { cartItem, addToCart, removeFromCart } = useContext(StoreContext);
  return (
    <div className='food-item' >
      <div className="food-item-img-container">
  <img src={image} className="food-item-image" alt={`${name} image`} />
  {
    !cartItem[id] ? 
    (
      <img 
        className="add" 
        onClick={() => addToCart(id)} 
        src={assets.add_icon_white} 
        alt="Add to cart" 
      />
    ) : 
    (
      <div className="food-item-counter">
        <img 
          onClick={() => removeFromCart(id)} 
          className="remove" 
          src={assets.remove_icon_red} 
          alt="Remove from cart" 
        />
        <p className="counter-quantity">{cartItem[id]}</p>
        <img 
          onClick={() => addToCart(id)} 
          className="add-more" 
          src={assets.add_icon_green} 
          alt="Add more" 
        />
      </div>
    )
  }
</div>
      <div className="food-item-info">
      <div className="food-item-name-rating">
        <p>{name}</p>
        <img src={assets.rating_starts} alt="" />
      </div>
      <p className='food-item-desc'> {description}</p>
      <div className="food-item-price">
        ${price}
      </div>
      </div>
    </div>
  )
}

export default FoodItem
