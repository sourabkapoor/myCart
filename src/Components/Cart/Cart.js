import React from 'react';
import util from './util';

const Cart = ({cart, remove}) => {
	var total = 0;

	var cartElement = cart.map((item,i) => { 
		total += Number(item.price)
		return ( 
			<div className='flex justify-center' key={i}>
				<div className="w-25 pa3 mr2 self-center">
					{item.title}
				</div>
				<div className="w-25 pa3 mr2 self-center">
					-
				</div>
				<div className="w-25 pa3 mr2 self-center">
					{util.formatCurrency(item.price)}  
				</div>
				<div className="w-25 pa3 mr2">
					<button className='ma2 pa2 f6 link br2 ph3 pv2 mb2 white bg-red'
					onClick={()=> remove(item)}>Delete</button>  
				</div>
			</div>	
		); 
	})

	return(
		<div >
			{cartElement}
			<hr className='w-40 fw4 ba'/>
			<h5>Total: </h5>{util.formatCurrency(total)}
			<hr className='w-40 fw4 ba'/>
			{console.log(cartElement)}
		</div>
	);
}

export default Cart;