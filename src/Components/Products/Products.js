import React from 'react';
import util from './util';

const Product = ({names, index, addToCart, define}) => {

const products = names.map((item, i)=> { 
	return (  
		Number(item.id)===index ? 
		<div key={i}>
			{item.products.map((items, i)=> 
			<div className='w-20 pa4 mr2 br3 dib ma2 grow shadow-4 bg-washed-yellow pointer ba' 
				key={i} onClick={(e)=> define(items)}>
				<img src={items.image} alt="logo" height="100" width="auto"/> <br/>
				{items.title} <hr/>
				{util.formatCurrency(items.price)}
				<button className='ma2 pa2 f6 link br2 white bg-dark-blue grow center' 
				onClick={(e)=> (addToCart(items), e.stopPropagation())} >Add to Cart</button>
			</div>)
			}
		</div> 
		: null 
	);
 
})
	return (
		<div className='flex-row-m flex-wrap pa3 items-baseline-m '>
			{products}
		</div>
	);
}

export default Product