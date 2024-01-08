import React, { useEffect, useState } from 'react'
import { Button} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { addToWishlist } from '../Redux/Slices/wishlistSlice'


function View() {
  const {id} = useParams()
  const {loading} = useSelector((state)=>state.productSlice)
  const [product,setProduct] = useState({})
  const dispatch = useDispatch()
  const {wishlist} = useSelector (state=>state.wishlistSlice)

  useEffect(()=>{
    const products = JSON.parse(localStorage.getItem("products"))
    setProduct(products.find(product=>product.id==id))
  },[])
  const handleWishlist = (product)=>{
    const existingProduct = wishlist.find(item=>item.id==product.id)
    if(existingProduct){
      alert("Please already exist")
    }else{
      dispatch(addToWishlist(product))
    }
  }
  return (
    <div className='mt-5 container'>
{
  loading?<div className='d-flex justify-content-center mt-5'><Spinner className='me-3' animation="border" variant="danger" />Loading</div>:
  <div className="row mt-5 align-items-center">
    <div className="col-md-4">
    <img className='rounded shadow' style={{height:'400px',width:'500px',marginBottom:'100px',marginTop:'30px'}} src={product?.thumbnail} alt="product" />
    </div>
    <div className="col-md-2"></div>
    <div className="col-md-6">
        <p>PID: {product?.id}</p>
        <h1>{product?.title}</h1>
        <h5 className='fw-bolder'>${product?.price}</h5>
        <p style={{textAlign:'justify'}}><span className='fw-bolder'>Description:</span>{product?.description}</p>
        <div className='d-flex justify-content-between mt-4'>
        <Button onClick={()=>handleWishlist(product)} className='btn btn-outline-dark fs-5'><i className="fa-solid fa-heart text-danger"></i>Wishlist</Button>
        <Button className='btn btn-outline-dark fs-5'><i className="fa-solid fa-cart-plus text-success"></i>Cart</Button>
        </div>
    </div>
</div>}
    </div>
  )
}

export default View