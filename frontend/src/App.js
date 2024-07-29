import React from 'react'
import AllQuotes from './pages/allQuotes'
import ShowQuote from './pages/showQuote'
import AddQuote from './pages/addQuote'
import { Link } from 'react-router-dom'

import {Routes,Route} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import AddToCart from './pages/AddToCart'

const App = () => {
  return (
    <div>
<nav class="navbar navbar-light bg-danger">
  <form class="container-fluid justify-content-end">
   <Link to ="/addquote" ><button class="btn btn-dark m-2" type="button">Add New Product</button></Link>
   <Link to ="/" ><button class="btn btn-dark m-2" type="button">Show All Product</button></Link>
   <Link to ="/addtocart" ><button class="btn btn-dark m-2" type="button">Go To Cart</button></Link>
  </form>
</nav>
      <Routes>
    <Route path='/' element={<AllQuotes/>} />
    <Route path='/addquote'  element={<AddQuote/>}/>
    <Route path='/showquote/:id'  element={<ShowQuote/>}/>
    <Route path='/addtocart'  element={<AddToCart/>}/>
  
  </Routes>
    </div>
  )
}

export default App
