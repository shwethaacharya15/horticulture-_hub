import React, { useEffect, useState } from 'react' ;
import axios from 'axios' ; 
import { Link, Navigate, useNavigate } from 'react-router-dom';









const Homee = ()  => {


  


  const [data , setData ] = useState([]);


  useEffect(() => {
    axios.get('http://localhost:8081/')
    .then(res => setData(res.data))
    .catch(err => console.log(err));
    
  })



  const navigate = useNavigate();
  const handleDelete = (id) => {
    axios.delete('http://localhost:8081/delete/' +id)
    .then(res => navigate('/homee'))
    .catch(err => console.log(err));

  }

  return (
    <div className='pinkuone'>
       
        <div className='pinkutwo'>
          

            <h2 className='pinkuthree'> CUSTOMER</h2>
            <div className='wrapper1'> <button className='pinkufour' > <Link to="/create" className='pinkufour1' > Add New Customer </Link></button></div>

           
          



            <div className='wrapper1'>
            <table className='pinkufive'>
               <thead>
                <tr>
                    <th>NAME</th>
                    <th>CATEGORY</th>
                    <th>PRODUCT</th>
                    <th>PRICE</th>
                    <th>STATUS</th>

                </tr>
               </thead>


               <tbody className='pinkufive' >
                {data.map( ( d , i) => (
                    <tr>
                        <td>{d.name}</td>
                        <td>{d.category}</td>
                        <td>{d.product}</td>
                        <td>{d.price}</td>
                        <td>
                           <button> <Link to={`/update/${d.id}`} className='pinkusix'>EDIT</Link></button>
                            <button   onClick={e => handleDelete(d.id)}  className='pinkuseven'>DELIVERED</button>
                            </td>
                    </tr>
                ))}


                
               </tbody>

            </table>
            </div>
           
           </div>
        </div>

  
  )
} 

export default Homee
