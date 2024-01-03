import React from 'react'
import { Table } from 'react-bootstrap'
import { useSelector } from 'react-redux'


function Cart() {
const cart= useSelector(state=>state.cartReducer)
  return (
    <div className='container mt-5'>
      {cart?.length>0?
      <div className="row mt-5">
        <div className="col-lg-8 mt-5">
        <Table className='shadow'>
          <thead>
            <tr>
              <th>#</th>
              <th>Product</th>
              <th>Image </th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {Cart.map((product,index) =>(
            <tr key ={index}>
              <td>{index+1}</td>
              <td>{product.title}</td>
              <td><img style={{height:'100px',width:'100px'}} src="" alt="product" /></td>
              <td></td>
              <td></td>
              <td><button className='btn'><i className="fa-solid fa-trash text-danger"></i></button></td>
            </tr>
            ))}
          </tbody>
        </Table>
        </div>
        <div className="col-lg-4 mt-5">
          <div className="border rounded shadow p-4">
            <h5>Total Product: <span className='fw-bolder'>3</span></h5>
            <h3>Total Amount: <span className='fw-bolder text-danger'>$ 560</span></h3>
            <hr />
            <div className="d-grid">
              <button className='btn btn-success'>CheckOut</button>
            </div>
          </div>
        </div>
      </div>:<div className='text-center ms-5 '>
          <img width={'55%'} height={'400px'} src="https://cdni.iconscout.com/illustration/premium/thumb/confusing-woman-due-to-empty-cart-4558760-3780056.png" alt="" />
          <h1 className='mt-3'>Your Cart is Empty</h1>
          <Link></Link>
         </div>
      }

    </div>
  )
}

export default Cart