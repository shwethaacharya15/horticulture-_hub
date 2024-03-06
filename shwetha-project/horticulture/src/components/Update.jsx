import React, { useState } from 'react'
import axios  from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const Update = () => {
  const [name , setDay] = useState('')
  const [category , setBreakfast] = useState('')
  const [product , setLunch] = useState('')
  const [price , setDinner] = useState('')

  const navigate = useNavigate();
  const {id} = useParams();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.put('http://localhost:8081/update/'+id , {name,category,product,price})
    .then(res => {
      navigate('/homee');


    }).catch(err => console.log(err));

  }

  return (

    <div className='pinkuone'> 
      <h2 className='pinkuthree'>Update Customer</h2>


<div className='wrapper1'>
     <div className='wrapper'>


        <form onSubmit={handleSubmit}>
      
        <div className='input-box'> 
        <label htmlFor=""></label>
        <input type='text' placeholder='update Name'  className='form-control' 
        onChange={e => setDay(e.target.value)}/>
        </div>

        
        <div className='input-box'> 
        <label htmlFor=""></label>
        <input type='text' placeholder='Update Category'  className='form-control' 
        onChange={e => setBreakfast(e.target.value)} />
        </div>

        
        <div className='input-box'> 
        <label htmlFor=""></label>  
        <input type='text' placeholder='Update product'  className='form-control' 
        onChange={e => setLunch(e.target.value) }/>
        </div>


        <div className='input-box'> 
        <label htmlFor=""></label>  
        <input type='text' placeholder='Update price'  className='form-control' 
        onChange={e => setDinner(e.target.value) }/>
        </div>

        <button className='btn'>Update</button>

        

        </form> 
        </div>


        </div>
    </div>
  )
}

export default Update




