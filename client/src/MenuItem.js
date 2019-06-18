import React from 'react'
import "./MenuItem.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun } from '@fortawesome/free-regular-svg-icons'

const MenuItem = (props) => {
	const showItemDescription = props.item.showModal &&
		<> 
			{props.item.localFavorite && <><FontAwesomeIcon icon={ faSun } color="red" /><h4>Local Favorite</h4></>}
			<h4>{props.item.description}</h4>
		</>

	// // modal
	// const modal = props.item.showModal && 
	// 	<div className="outer-modal">
	// 		<div className="modal-show">
	// 			<div className="item-image"></div>
	// 			<h1>{props.item.title}</h1>
	// 			<h2>{props.item.price}</h2>
	// 			<h2>{props.item.description}</h2>
	// 		</div>		
	// 	</div>

	return (
	<div 
		className='MenuItem__container' 
		onClick={() => props.toggleModal(props.item._id, props.index)}
	>
		<h2 className="item-title">{props.item.title}</h2>
		{props.item.localFavorite && <FontAwesomeIcon icon={ faSun } color="red" />}
		<h2>${props.item.price}</h2>
		<div>
			{showItemDescription}
		</div>
		{/* {modal} */}
	</div>
	);
}

export default MenuItem
