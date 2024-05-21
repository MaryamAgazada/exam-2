import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import './App.css'
import Layout from './layout/Layout';
import Home from './pages/home/Home';
import Basket from './pages/basket/Basket';
import Wishlist from './pages/wishlist/Wishlist';
import Detail from './pages/detail/Detail';
import Add from './pages/add/Add';
import Search from './pages/search/Search';
import MainProvider from './context/MainProvider';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HelmetProvider>
        <MainProvider>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path="basket" element={<Basket />} />
          <Route path="contact" element={<Wishlist/>}/>
          <Route path="Detail" element={<Detail/>}/>
          <Route path="Add" element={<Add/>}/>
          <Route path="Search" element={<Search/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </MainProvider>
    </HelmetProvider>
    </>
  )
}

export default App
