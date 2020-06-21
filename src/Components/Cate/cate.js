import React from 'react';

const Cate = ({names, index}) => {
	const category = names.map((hits, i) => {
		return (
			<div className='w-20 pa4 mr2 mb2 br3 dib ma3 grow shadow-4 bg-washed-yellow pointer h4'
			key={i} onClick={()=> index(i)} >
				<div className='mt3'>{hits.className}</div>
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







