import React from 'react';

const Cate = ({names, index}) => {
	const category = names.map((hits, i) => {
		return (
			<div className='w-20 pa4 mr2 mb2 br3 dib br3 pd3 ma2 mr2 grow bw2 shadow-4 bg-washed-yellow pointer'
			key={i} onClick={()=> index(i)} >
				{hits.className}
			</div>
		)
	});
	
	return (
		<div className='flex flex-wrap pa3 justify-center h4' >
			{category}
		</div>
	);
}

export default Cate;







