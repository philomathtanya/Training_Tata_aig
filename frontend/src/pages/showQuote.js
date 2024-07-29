import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
const ShowQuote = () => {
 const [particularQuote,setquote]=useState([]);
  const params =useParams();
  const id=params.id;
  async function gettingIdData()
  {
     const data=await axios.get(`http://localhost:8000/quote/${id}`)
    // console.log(data.data);
setquote(data.data);
  }
  useEffect(()=>{
gettingIdData();
  },[])
  return (
    <div>
    <div className="card mt-5 container" style={{width:'30%'}}>
<div className="card-header">Product</div>
<div className="card-body ">
  <blockquote className="blockquote mb-0">
    <p>{particularQuote.name}</p>
    <div style={{ padding: '1rem', flex: '1' }}>
            <img
              src={particularQuote.img}
              alt="Product"
              style={{ width: '100%', height: 'auto', borderBottom: '1px solid #ddd' }}
            />
            <p>{particularQuote.name}</p>
            <footer style={{ marginTop: '1rem' }}>
              <cite title="Source Title">{particularQuote.price}</cite>
              <p>{particularQuote.desc}</p>
            </footer>
          </div>
    <footer className="blockquote-footer">
      <cite title="Source Title">{particularQuote.price}</cite>
    </footer>
  </blockquote>
 
</div>
</div>

  </div>
  )
}

export default ShowQuote
