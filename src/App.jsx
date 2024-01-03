import './App.css'
import { Routes,Route, Navigate } from 'react-router-dom';
import WishList from './pages/WishList';
import Cart from './pages/Cart';
import View from './pages/View';
import Home from './pages/Home';
import Header from './Components/Header';
import Footer from './Components/Footer'


function App() {

  return (
    <>
    <Header/>

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/wishlist' element={<WishList/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/view/:id' element={<View/>}/>
      <Route path='/*' element={<Navigate to={'/'}/>}/>

    </Routes>

    <Footer/>
       
    </>
  )
}

export default App