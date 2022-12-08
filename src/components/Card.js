import React from 'react'

import { useDispatch,useSelector } from 'react-redux'
import { add } from '../store/RealSlice'
function Card() {
  const dispatch = useDispatch();
  const select=useSelector((state)=>state.RealSlice.property)
  return (
    <div className='card'>
      {
        select.map((item, index) => {
          return (
            <div key={index} className='card-container'>
              <img src={item.image} />

              <h3>{item.price} </h3>
              <h2>{item.name}</h2>
              <h4>{item.location}</h4>
              <button onClick={() => dispatch(add({
                id: item.id,
                image: item.image,
                price: item.price,
                name: item.name,
                location: item.location
              }))}>Add favourite</button>

            </div>
          )
        })
      }
    </div>
  )
}

export default Card