import React, { useEffect } from 'react'
import { Card,Row,Col,Spinner} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchProducts } from '../Redux/Slices/productSlice'
import { addToWishlist } from '../Redux/Slices/wishlistSlice'
import { addtoCart} from '../Redux/Slices/cartSlice'
import  Header from '../Components/Header'


function Home() {

  const dispatch = useDispatch()
  const {loading,products,error,productsPerPage,currentPage} = useSelector((state)=>state.productSlice)
  const {wishlist} = useSelector((state)=>state.wishlistSlice)
 
  //for pagination
  const totalPages=Math.ceil(products?.length/productsPerPage)
  const indexOfLastPage= currentPage*productsPerPage
  const indexOfFirstPage= indexOfLastPage-productsPerPage

  const visibleCards= products?.slice(indexOfFirstPage,indexOfLastPage)


  useEffect(()=>{
    dispatch(fetchProducts())
  },[])

  const handleWishlist = (product)=>{
    const existingProduct= wishlist.find(item=>item.id==product.id); //to avoid duplication
    if(existingProduct){
      alert("Product alredy added to Wishlist!!!")
    }else{
      dispatch(addToWishlist(product))
    }
  }

  const navigatePrev=()=>{
    if(currentPage!=1){
      dispatch(onNavigatePrevious())
    }
  }

  const navigateNext=()=>{
    if(currentPage!=totalPages){
      dispatch(onNavigateNext())
    }
  }

  return (
    <>
     <Header insideHome/>
      <div className='ms-5' style={{marginTop:'60px'}}>
        
        {
          !loading&&error?<div className='text-center text-info'>{error}</div>:null
        }
        {
          loading? <div className='text-center mt-5'> <Spinner animation="border" variant="info" />Loading...</div>
          :   <Row  className='container mt-5'>
          {products.length>0?visibleCards.map((product,index)=>(
              <Col key={index} className='mb-5' sm={12} md={6} lg={4} xl={3}>
              <Card className='shadow rounded' style={{ width: '18rem' }}>
                <Link to={`/view/${product.id}`}><Card.Img style={{height:'180px'}} variant="top" src={product.thumbnail} /></Link>
                <Card.Body>
                  <Card.Title>{product.title.slice(0,20)}...</Card.Title>
                  <div className='d-flex justify-content-between'>
                    <Button onClick={()=>handleWishlist(product)}  className='btn btn-light fs-5'><i className="fa-solid fa-heart text-danger"></i></Button>
                    <Button onClick={()=>dispatch(addtoCart(product))} className='btn btn-light fs-5'><i className="fa-solid fa-cart-plus text-success"></i></Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          )):
          !error&&<div >
            <h3 className='text-center text-info'>Product Not Found!!!</h3>
          </div>}


          {/* pagination */}
          <div className="d-flex justify-content-center align-items-center fw-bolder">
            <span  style={{color:'navy',textDecoration:'none'}} className='btn btn-link' onClick={navigatePrev}><i className="fa-solid fa-angle-left fw-bolder "><small className='ms-2'>Prev</small></i></span>
            <span>{currentPage} of {totalPages}</span>
            <span style={{color:'navy',textDecoration:'none'}} onClick={navigateNext} className='btn btn-link'>Next<i className="fa-solid fa-angle-right fw-bolder ms-2"></i></span>

          </div>
        </Row>
        }
      
      </div>
    </>
  )
}

export default Home