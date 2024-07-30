import axios from 'axios'
import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash,faPlus } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom'
const Quote = (props) => {
    const navigate=useNavigate();
    async function delequote(id)
    {
        const data=await axios.delete(`http://localhost:8000/delete/${id}`);
        console.log(data.data);
        console.log('data deleted');
        const newQuote=data.data.deletedQuote;
        props.dlted(newQuote);
        
        
                                                                                   
    }
   
    function deleteHandler(id)
    {
        delequote(id);
    }
  return (
    
      
        <div style={{width:'400px' ,border:'1px solid grey', borderRadius:'16px'}}>
          {/* <div style={{ padding: '1rem', backgroundColor: '#f5f5f5', fontWeight: 'bold'}}>Product</div> */}
          <div style={{ padding: '1rem', flex: '1' }}>
            <img
              src={props.quote.img}
              alt="Product"
              style={{ width: '100%', height: '200px', borderBottom: '1px solid #ddd', objectFit:'cover' }}
            />
            <p>{props.quote.name}</p>
            <footer style={{ marginTop: '1rem' }}>
              <cite title="Source Title">{props.quote.price}</cite>
              <p>{props.quote.desc}</p>
            </footer>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', margin: '1rem 0' }}>
            <Link to={`/showquote/${props.quote._id}`}>
              <button style={{ margin: '0 0.5rem' }} className="btn btn-primary">Show Product</button>
            </Link>
            <button
              style={{ margin: '0 0.5rem' }}
              className="btn btn-danger"
              onClick={() => deleteHandler(props.quote._id)}
            >
              Delete Product &nbsp;
              <FontAwesomeIcon icon={faTrash} />
            </button>
            <Link to={'/addtocart'}><button>  <FontAwesomeIcon icon={faPlus} /></button></Link>
          </div>
        </div>
     

  )
}

export default Quote
