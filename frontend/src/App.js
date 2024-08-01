import React from 'react'
import { Link } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import { AddProductPage, AddToCart, AllProductsPage, EditProductPage, LoginPage, ShowProductPage, Register } from './pages'
import ProtectedRoute from './middleware/isLoggedIn'


const App = () => {
  return (
    <div>
      <nav class="navbar navbar-light bg-danger">
        <form class="container-fluid justify-content-end">
          <Link to="/add-new-product" ><button class="btn btn-dark m-2" type="button">Add New Product</button></Link>
          <Link to="/" ><button class="btn btn-dark m-2" type="button">Show All Product</button></Link>

        </form>
      </nav>
      <Routes>
        {/* <Route path='/' element={<ProtectedRoute element={<AddProductPage />} />} /> */}
        <Route path='/' element={<AllProductsPage/>} />

        <Route path='/add-new-product' element={<AddProductPage />} />
        <Route path='/show-product/:id' element={<ShowProductPage />} />
        <Route path='/go-to-cart' element={<AddToCart />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<Register />} />
        <Route path='/edit-product/:id' element={<EditProductPage />} />

      </Routes>
    </div>
  )
}

export default App
