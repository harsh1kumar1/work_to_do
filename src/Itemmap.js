import React from 'react'
import "./Itemmap.css"

const Itemmap = (props) => {

    
  return (
    <>
      <div className='maindiv'>  
      <li className='item__list'>{props.text}</li>
      <button className='button2' onClick={()=>{
        props.onSelect(props.id)
      }}>delete</button>

      
      </div>
      </>
   
  )
}

export default Itemmap
