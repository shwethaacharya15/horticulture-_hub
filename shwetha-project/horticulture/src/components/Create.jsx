import React, { useState } from 'react'
import axios  from 'axios'
import { useNavigate } from 'react-router-dom'

const Create = () => {
  const [name , setDay] = useState('')
  const [category , setBreakfast] = useState('')
  const [product , setLunch] = useState('')
  const [price , setDinner] = useState('')
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:8081/create' , {name,category,product,price})
    .then(res => {
      navigate('/homee');


    }).catch(err => console.log(err));

  }


  return (

    <div className='pinkuone'> 
      <h2 className='pinkuthree'>Add Customer</h2>


<div className='wrapper1'>
     <div className='wrapper'>


        <form onSubmit={handleSubmit}>
      
        <div className='input-box'> 
        <label htmlFor=""></label>
        <input type='text' placeholder='Enter Name'  className='form-control' 
        onChange={e => setDay(e.target.value)}/>
        </div>

        
        <div className='input-box'> 
        <label htmlFor=""></label>
        <input type='text' placeholder='Enter Category'  className='form-control' 
        onChange={e => setBreakfast(e.target.value)} />
        </div>

        
        <div className='input-box'> 
        <label htmlFor=""></label>  
        <input type='text' placeholder='Enter Product'  className='form-control' 
        onChange={e => setLunch(e.target.value) }/>
        </div>


        <div className='input-box'> 
        <label htmlFor=""></label>  
        <input type='text' placeholder='Enter Price'  className='form-control' 
        onChange={e => setDinner(e.target.value) }/>
        </div>

        <button className='btn'>Submit</button>

        

        </form> 
        </div>


        </div>
    </div>
  )
}

export default Create
