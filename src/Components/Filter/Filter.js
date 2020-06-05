import React from 'react';

export default class Filter extends React.Component {
	render() {
		return (
			<div className='flex'>
				<div className='w-50'> 
					<label className='b'>Sort By: 
						<select className='form-control' value={this.props.Sort} onChange={this.props.changeSort}>
							<option value=''>Select</option>
							<option value='high'>Highest to Lowest</option>
							<option value='low'>Lowest to Highest</option>
						</select>
					</label>
				</div>
				<div className='w-50'>
					<label className='b'>Availability:
						<select className='form-control' value={this.props.ava} onChange={this.props.changeava}>
							<option value=''>In Stock</option>
							<option value=''>Not In Stock</option>
						</select>
					</label>
				</div>
			</div>
		);
	}
}