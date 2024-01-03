import React, { useEffect, useState } from 'react'
import { Navbar, Container, Badge } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav'
import { useSelector } from 'react-redux'

import { Link } from 'react-router-dom'

function Header() {
  const [wishlistCount, setWishlistCount] = useState(0)
  const [cartCount, setCartCount] = useState(0)
  const wishlist = useSelector(state => state.wishlistSlice.wishlist)
  const cart = useSelector(state.cartReducer)

  useEffect(() => {
    setWishlistCount(wishlist?.length)
    setCartCount(cart?.length)
  }, [wishlist, cart])
  return (
    <Navbar style={{ zIndex: '1' }} expand="lg" className="bg-primary position-fixed top-0 w-100 mb-5">
      <Container>
        <Navbar.Brand><Link to={'/'} style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold' }}>
          <i style={{ height: '26px' }} class="fa-solid fa-truck-fast me-2"></i>E-Cart</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className='btn border rounded'>
              <Link to={'/WishList'} className='d-flex align-items-center' style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold' }}>
                <i className="fa-solid fa-heart text-danger me-2"></i>
                Wishlist
                <Badge className='ms-2 rounded' bg="light">{wishlistCount}</Badge>
              </Link>
            </Nav.Link>
            <Nav.Link className='btn border rounded ms-5'>
              <Link to={'/Cart'} className='d-flex align-items-center' style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold' }}>
                <i className="fa-solid fa-cart-shopping text-warning me-2"></i>
                Cart
                <Badge className='ms-2 rounded' bg="light">10</Badge>
              </Link>
            </Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header