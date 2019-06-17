import React, { useState, useEffect } from 'react'
import MenuItem from "./MenuItem"
import axios from "axios"

const Menu = () => {
	const [ menuItems, setMenuItems ] = useState([])

	// const getMenuItems = () => {
	// 	axios.get("menu").then(response => {
	// 		setMenuItems(response.data)
	// 	})
	// } 

	useEffect(() => {
		axios.get("menu").then(response => {
			setMenuItems(response.data)
		})	
	}, [])

	// const mappedMenuItems = menuItems.map(item => {
	// 	return item.title && <div key={item._id}>{item.title} ${item.price} {item.description}</div>
	// })

	const toggleModal = (id, i) => {
		console.log("fired", id)
		console.log(menuItems)	
		setMenuItems(
			menuItems.map(item => {
				return item._id === id ? { ...item, showModal: !item.showModal } : item
			})
		)
		console.log(menuItems)	
	}

	const mappedMenuItems = menuItems.map((item, i) => 
		<MenuItem
			key={item._id}
			item={item}
			index={i}
			toggleModal={toggleModal}
		/>
	)

	console.log(menuItems)
	return (
		<div className='menu__container' id="menu">
			<h1>MENU</h1>
			{mappedMenuItems}
		</div>
	);
}

export default Menu