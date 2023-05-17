import React, { useEffect, useState } from 'react'
import "./Todo.css"
import Itemmap from './Itemmap'

const Todo = () => {

  const getLocalStorage = () =>{
    let list =localStorage.getItem('lists');
    // console.log(list)
    if(list){
      return JSON.parse(localStorage.getItem('lists'))
    }
    else{
      return[];
    }
  }

const[inputitem,setInputitem] = useState("")
const[stored,setStored] = useState(getLocalStorage())

const additem =()=>{
    setStored((old_item)=>{
        return[...old_item,inputitem]
    },
    setInputitem("")
    )};  //accrss all the previus data of stored useState array value



const input =(event)=>{
    setInputitem(event.target.value)

}

const deleteItems =(id)=>{
  console.log("ok")

  setStored((old_item)=>{
    return old_item.filter((arrElement,index)=>{
      return index !== id
    })
  })
}

useEffect(()=>{
  localStorage.setItem('lists',JSON.stringify(stored))
},[stored]);


  return (
    <div className='main__div'>
      <h1  >JUST DO IT</h1>
      <img className='image' src="https://images.emojiterra.com/google/noto-emoji/unicode-15/animated/1f680.gif" ></img>
      <div className='list'>
      <input className='input__holder' type='text'
      value={inputitem}
      placeholder='enter your work to do'onChange={input}/>
      <button className='button1'  onClick={(additem)} >Add</button>
        <ol className='__list'>

        {stored.map((value,index)=> {
            return < Itemmap text={value}
            key={index}
            id={index}
            onSelect={deleteItems}
            />
        })}

        </ol>
        </div>
    </div>
  )
}

export default Todo
