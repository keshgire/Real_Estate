import React,{useState} from 'react'
import{useDispatch,useSelector} from 'react-redux'
import {applyFilter} from '../store/RealSlice'

function Search() {
  const[location,setLocation]=useState('');
  const[price,setPrice]=useState('');
  const[property,setProperty]=useState('');
  const dispatch=useDispatch();

  const handleClick = (location, price, property) => {
    if (property.length >= 0) {
      dispatch(applyFilter({ location, price, property }));
    }

  }
  // const handleClick=(...param)=>{
  //   if(property.length>0 ){dispatch(search_location(param[0]))
  //      dispatch(search_price(param[1]))
  //     dispatch(search_property(param[2]))}
     
  // }

  // const handleClick=(...param)=>{
  // return (location.length>0 && price.length>0 && property.length>0) 
  //   ? dispatch((search_location(param[0])),(search_price(param[0])),search_property(param[0])):''
   
  // }

  return (
    <div className='search-container'>
     
    <div>
      <span>Location</span>
      <select onChange={(e)=>setLocation(e.target.value)}>
      <option value=''>---Select Location---</option>
        <option value='New York'>New York</option>
        <option value='Canada'>Canada</option>
      </select>
    </div>
    <div >
      <span>Price</span>
      <select onChange={(e)=>setPrice(e.target.value)}>
      <option value=''>---Select Price---</option>
        <option value='0-3000'>$0-$3000</option>
        <option value='3000-6000'>$3000-$6000</option>
        <option value='6000-10000'>$6000-$10000</option>
      </select>
    </div>
    <div>
      <span>Property Type</span>
      <select onChange={(e)=>setProperty(e.target.value)}>
      <option value=''>---Select Type---</option>
        <option value='House'>House</option>
        <option value='Flat'>Flat</option>
      </select>
    </div>
    <div className='search-btn'>
      <button onClick={()=>handleClick(location,price,property)} >search</button>
    </div>
    </div>
  )
}

export default Search