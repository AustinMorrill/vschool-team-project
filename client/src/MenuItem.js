import React from 'react'
import "./MenuItem.css"

const MenuItem = (props) => {
	const showItemDescription = props.item.showModal && 
			<h4>{props.item.description}</h4>

	const modal = props.item.showModal && 
		<div className="outer-modal">
			<div className="modal-show">
				<div className="item-image"></div>
				<h1>{props.item.title}</h1>
				<h2>{props.item.price}</h2>
				<h2>{props.item.description}</h2>
			</div>		
		</div>

	return (
	<div 
		className='MenuItem__container' 
		onClick={() => props.toggleModal(props.item._id, props.index)}
	>
		<h2>{props.item.title}</h2>
		<h2>${props.item.price}</h2>
		<div>
			{showItemDescription}
		</div>
		{/* {modal} */}
	</div>
	);
}

export default MenuItem
