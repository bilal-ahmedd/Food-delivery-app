import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../context/StoreContext'

const FoodDisplay = (category) => {
    const { foodList } = useContext(StoreContext)
  return (
    <div className='food-display' id='food-display' >
        <h2> Top dishes near you </h2>
        <div></div>
    </div>
  )
}

export default FoodDisplay
