import React from 'react'
import "./MenuItem.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBacon, faCaretDown, faCaretRight } from '@fortawesome/free-solid-svg-icons'
import Fade from "react-reveal/Fade"

const MenuItem = (props) => {
	const showItemDescription = props.item.showModal &&
		<> 
			{/* {props.item.localFavorite && 
				<>
					<FontAwesomeIcon 
						icon={ faBacon } 
						color="red" 
						size="2x" 
					/>
					<h4>Local Favorite</h4>
				</>
			} */}
			<h4 className="description">{props.item.description}</h4>
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
	
	const showAccordianBtn = 
		!props.item.showModal && props.item.description !== "..." ? 
		<FontAwesomeIcon 
			className="accordian-btn" 
			icon={ faCaretDown } 
			color="#333" 
			size="2x" 
		/>
		:
		props.item.showModal &&
		<FontAwesomeIcon 
			className="accordian-btn" 
			icon={ faCaretRight } 
			color="#333" 
			size="2x" 
		/>
		const showAccordian = props.item.showModal ? "" : "no-accordian"
	return (
		<div 
			className='menuItem__container'
			onClick={() => props.toggleModal(props.item._id, props.index)}
		>
			<div className="visible-item-container">
				{showAccordianBtn}
				<h2 className="item-title">{props.item.title}</h2>
				{props.item.localFavorite && 
					<div>
					<FontAwesomeIcon 
						className="favorite" 
						icon={ faBacon } 
						color="red"
						size="2x" 
					/>
					<span className="toolTip-span">L F</span>
					</div>
				}
				<h2 className="price">${props.item.price}</h2>
			</div>
				<Fade duration={400} when={props.item.showModal}>
					<div className={`accordian-container ${showAccordian}`}>
						<div 
							className="image" 
							style={{backgroundImage: `url(${props.item.imgUrl})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat"}}
						>
							{props.item.imgUrl === "" && 
								<h4 style={{height: "100%",background: "#333",margin: "0",color: "#f7f7f7"}}>
									No Image
								</h4>
							}
						</div>
						{showItemDescription}
					</div>
				</Fade>
			{/* {modal} */}
		</div>
	);
}

export default MenuItem