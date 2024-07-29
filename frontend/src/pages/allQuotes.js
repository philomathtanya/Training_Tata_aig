import React, { useEffect } from 'react'
import Quote from '../components/quote'
import { useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const AllQuotes = () => {

    const [Quotes,setQuotes]=useState([]);

    async function fetchAllQuotes(){
        const apidata=await axios.get('http://localhost:8000/');

setQuotes(apidata.data);
    }
   const deleteHandler=(deletedquote)=>{
      const updatedQuotes= Quotes.filter((item)=>item._id!==deletedquote._id);
      setQuotes(updatedQuotes);
   }
   


useEffect(()=>{
    fetchAllQuotes();
},[])

  return (
    <div className='container'>
       <h1>All Products</h1>
       
       {Quotes.map((quote)=>{
       return (
        <div style={{display:'flex'}}>
       <Quote quote={quote} dlted={deleteHandler}/>
       </div>
       )
     })}
    </div>
  )
}

export default AllQuotes
