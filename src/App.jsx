import axios from 'axios';
import { useEffect, useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './components/Home';
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NabBar'
import CardDetail from './components/CardDetail';

const URL_API = "https://fakestoreapi.com/products";

function App() {
  const [products, setproducts] = useState([]);
  
  const getProducts = async () => {
    try {
      const response = await axios(URL_API);
      setproducts(response.data);
    }catch (error) {
      console.log( "ERROR:" + error);
    }
  } // manera mas moderna de trabajar con promesas y try catch

  useEffect(() => {
    getProducts();
  }, [])

  console.log(products);
  
  return (
    <>
    <div className="container">
      <NavBar />
      <Routes>
        <Route path="/" element={<Navigate to="/home"/>} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<ItemListContainer products={products} />} />
        <Route path='/products/:id' element={<CardDetail />} />
      </Routes>
      

    </div>
    </>
  )
}

export default App
