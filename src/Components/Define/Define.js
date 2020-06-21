import React from 'react';
import Back from './back-arrow.png'

const Define = ({back, name, price, description, image, addToCart}) => {
	const obj = {title: `${name}`, price: `${price}` , image: `${image}` }

	
	return (
		<div>
			<h2 className='courier b'>{name}</h2>
            <hr className='w-60 fw4 ba'/>
            <br/>
			<img src={image} alt="Product" height="300" width="auto"/> 
			<br/><br/>
            <h3 className='courier w-30 center bg-lightest-blue'>price: ${price}</h3>
			<button className='ma2 pa3 f5 link br2 white bg-dark-blue grow center' 
				onClick={(e) => addToCart(obj)} >Add to Cart</button>
            <h4 className='georgia'>{description}</h4>
		<div className='flex justify-between'>
			<div className='w-100 pa3 items-end'>
				<img className='pointer pa1' src={Back} alt='goBack' onClick={back} />
			</div>
			</div>
		</div>
		
	)
}

export default Define;