import React from 'react'
import {useSelector} from 'react-redux'

function Rent() {
  const select=useSelector((state)=>state.RealSlice.filterData)
  return (
    <div  className='card'>
      {
        select.map((item,index)=>{
          return(
            <div key={index} className='card-container'>
              <img src={item.image} />
              <h3>{item.price}</h3>
              <h3>{item.address}</h3>
              <h4>{item.location}</h4>
              <h4>{item.type}</h4>
            </div>
          )
        })
      }
    </div>
  )
}

export default Rent