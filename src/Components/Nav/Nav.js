import React from 'react';
import {Navbar} from 'react-bootstrap';
import img from './cart.png'

const Nav = ({onPressing, routeChange, addTocart, cartPress}) => {
	return(
		<Navbar className='shadow-4 nav-color'>
		  <Navbar.Brand className='georgia b pointer' onClick={onPressing}><h2>My Cart</h2></Navbar.Brand>
		  <Navbar.Toggle />
		  <Navbar.Collapse className="justify-content-end">
		    <img className='pointer pa1' src={img} alt='Cart' onClick={cartPress}/>
		  </Navbar.Collapse>
		</Navbar>
	);
}

export default Nav;