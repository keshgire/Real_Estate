import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../store/RealSlice'
function Favourite() {
  const dispatch = useDispatch();
  const select = useSelector((state) => state.RealSlice.value)
  console.log(select)
  return (
    <div>
        <div className='card'>
      {
        select.map((item, index) => {
          return (
            <div key={index} className='card-container'>
              <img src={item.image} />

              <h3>{item.price} </h3>
              <h2>{item.name}</h2>
              <h4>{item.location}</h4>
              <button onClick={() => dispatch(remove({
                id: item.id
              }))}>Remove favourite</button>

            </div>
          )
        })
      }
    </div>
    </div>
      )
}

      export default Favourite