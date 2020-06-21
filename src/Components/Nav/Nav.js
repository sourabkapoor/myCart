import React from 'react';
import {Navbar} from 'react-bootstrap';
import img from './cart.png'
import main from './logo.png';

const Nav = ({onPressing, routeChange, addTocart, cartPress}) => {
	return(
		<Navbar className='shadow-4 nav-color'>
		  <Navbar.Brand className='pointer' onClick={onPressing}><img src={main} alt='main' height='70'/></Navbar.Brand>
		  <Navbar.Toggle />
		  <Navbar.Collapse className="justify-content-end">
		    <img className='pointer pa1' src={img} alt='Cart' onClick={cartPress}/>
		  </Navbar.Collapse>
		</Navbar>
	);
}

export default Nav;