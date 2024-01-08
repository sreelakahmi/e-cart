import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { emptyCart, removeCart } from '../Redux/Slices/cartSlice'


function Cart() {
  
  const navigate = useNavigate()
  const cart=useSelector((state)=>state.cartReducer)
  const [cartAmount,setCartAmount] = useState(0)
  const dispatch =useDispatch()

  useEffect(()=>{
    if(cart?.length>0){
      setCartAmount(cart.map(item=>item.totalPrice).reduce((p1,p2)=>p1+p2))
    }else{
      setCartAmount(0)
    }
  },[cart])

  const handleCheckout =()=>{
    alert('Your order is Sucessfully Placed...Thank You for purchasing with us!!!!')
    dispatch(emptyCart())
    navigate('/')

  }
  return (
    <div className='container mt-5'>
      { cart?.length>0?<div className="row mt-5">
        <div className="col-lg-8 mt-5">
        <Table className='shadow'>
          <thead>
            <tr>
              <th>#</th>
              <th>Product</th>
              <th>Image </th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            { cart.map((item,index)=>(
              <tr key={index}>
              <td>{index+1}</td>
              <td>{item.title}</td>
              <td><img style={{height:'100px',width:'100px'}} src={item.thumbnail} alt="product" /></td>
              <td>{item.quantity}</td> {/* To given as form:<input type="text" value={item.quantity} readOnly */}
              <td>$ {item.totalPrice}</td>{/* not item.price,since it contain price of 1 unit.we have to get total price acrding to quantity*/ }
              <td><button onClick={()=>dispatch(removeCart(item.id))} className='btn'><i className="fa-solid fa-trash text-danger"></i></button></td>
            </tr>
            )) }
          </tbody>
        </Table>
        <div className="float-end">
          <button onClick={()=>dispatch(emptyCart())} className='btn btn-danger me-3'>Empty Cart</button>
          <Link to={'/'} className='text-dark fw-bold'>Shop More</Link>
        </div>
        </div>
        <div className="col-lg-4 mt-5">
          <div className="border rounded shadow p-4">
            <h5>Total Product: <span className='fw-bolder'>{cart?.length}</span></h5>
            <h3>Total Amount: <span className='fw-bolder text-danger'>$ {cartAmount}</span></h3>
            <hr />
            <div className="d-grid">
              <button onClick={handleCheckout} className='btn btn-success'>CheckOut</button>
            </div>
          </div>
        </div>
      </div> :
      <div className='text-center mt-5'>
      <img src="https://metro-website-images.s3.eu-west-1.amazonaws.com/plugins/user/images/emptycart.png" alt="" />
      <h1>Your Cart is Empty</h1>
      <Link to={'/'} className='btn btn-sucess'>Click here to Shop More</Link>

    </div>
      }

    </div>
  )
}

export default Cart