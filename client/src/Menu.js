import React, { useState, useEffect } from 'react'
import MenuItem from "./MenuItem"
import axios from "axios"
import "./Menu.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBacon } from '@fortawesome/free-solid-svg-icons'
import Fade from "react-reveal/Fade"


const Menu = () => {
	const [ menuItems, setMenuItems ] = useState([])
	const [ menuType, setMenuType ] = useState("")
	const [ show, setShow ] = useState(false)

	useEffect(() => {
		axios.get("/menu").then(response => {
			setMenuItems(response.data)
		})
	}, [])

	const toggleModal = (id, i) => {
		setMenuItems(
			menuItems.map(item => {
				return item._id === id ? { ...item, showModal: !item.showModal } : item
			})
		)
	}

	const breakfastSpecials = menuItems.filter(item => item.subMenuType === "special").map((item, i) => 
		<MenuItem
			key={item._id}
			item={item}
			index={i}
			toggleModal={toggleModal}
		/>)
	const breakfastTraditional = menuItems.filter(item => item.subMenuType === "traditional").map((item, i) => 
		<MenuItem
			key={item._id}
			item={item}
			index={i}
			toggleModal={toggleModal}
		/>)
	const breakfastOmelettes = menuItems.filter(item => item.subMenuType === "omelettes").map((item, i) => 
		<MenuItem
			key={item._id}
			item={item}
			index={i}
			toggleModal={toggleModal}
		/>)
	const breakfastKidsSeniors = menuItems.filter(item => item.subMenuType === "kids_seniors").map((item, i) => 
		<MenuItem
			key={item._id}
			item={item}
			index={i}
			toggleModal={toggleModal}
		/>)
	const breakfastSides = menuItems.filter(item => item.subMenuType === "sides").map((item, i) => 
		<MenuItem
			key={item._id}
			item={item}
			index={i}
			toggleModal={toggleModal}
		/>)
	const lunchSandwiches = menuItems.filter(item => item.subMenuType === "sandwiches").map((item, i) => 
		<MenuItem
			key={item._id}
			item={item}
			index={i}
			toggleModal={toggleModal}
		/>)
	const lunchBurgers = menuItems.filter(item => item.subMenuType === "burgers").map((item, i) => 
		<MenuItem
			key={item._id}
			item={item}
			index={i}
			toggleModal={toggleModal}
		/>)
	const lunchDinerClassics = menuItems.filter(item => item.subMenuType === "diner_classics").map((item, i) => 
		<MenuItem
			key={item._id}
			item={item}
			index={i}
			toggleModal={toggleModal}
		/>)
	const lunchSalads = menuItems.filter(item => item.subMenuType === "salads").map((item, i) => 
		<MenuItem
			key={item._id}
			item={item}
			index={i}
			toggleModal={toggleModal}
		/>)
	const lunchSoups = menuItems.filter(item => item.subMenuType === "soup").map((item, i) => 
		<MenuItem
			key={item._id}
			item={item}
			index={i}
			toggleModal={toggleModal}
		/>)
	const sides = menuItems.filter(item => item.subMenuType === "extras").map((item, i) => 
		<MenuItem
			key={item._id}
			item={item}
			index={i}
			toggleModal={toggleModal}
		/>)
	const dough = menuItems.filter(item => item.subMenuType === "homemade").map((item, i) => 
		<MenuItem
			key={item._id}
			item={item}
			index={i}
			toggleModal={toggleModal}
		/>)
	const drinks = menuItems.filter(item => item.subMenuType === "drinks").map((item, i) => 
		<MenuItem
			key={item._id}
			item={item}
			index={i}
			toggleModal={toggleModal}
		/>)

	const breakfastMenu = 
		<>
			<h1 className="menu-title">Breakfast Menu</h1>	
			<h2 className="sub-menu-title">Traditional</h2>
			{breakfastTraditional}
			<h2 className="sub-menu-title">Specials</h2>
			{breakfastSpecials}
			<h2 className="sub-menu-title">Omelettes</h2>
			{breakfastOmelettes}
			<h2 className="sub-menu-title">Kids & Seniors <span style={{fontSize: "0.5em"}}>12 and under, 65 and older</span></h2>
			{breakfastKidsSeniors}
			<h2 className="sub-menu-title">Breakfast Sides</h2>
			{breakfastSides}
		</>
	const lunchMenu = 
		<>
			<h1 className="menu-title">Lunch Menu</h1>
			<h2 className="sub-menu-title">Sandwiches</h2>
			{lunchSandwiches}
			<h2 className="sub-menu-title">Burgers</h2>
			{lunchBurgers}
			<h2 className="sub-menu-title">Diner Classics</h2>
			{lunchDinerClassics}
			<h2 className="sub-menu-title">Salads</h2>
			{lunchSalads}
			<h2 className="sub-menu-title">Soups</h2>
			{lunchSoups}	
		</>
	const sidesMenu = 
		<>
			<h1 className="menu-title">Sides Menu</h1>
			{sides}
		</>
	const doughMenu = 
		<>
			<h1 className="menu-title">Homemade Dough Menu</h1>
			{dough}
		</>
	const drinksMenu = 
		<>
			<h1 className="menu-title">Beverages Menu</h1>
			{drinks}
		</>

	const menuHeader = menuType === "" && <h1 className="menu-title" style={{fontSize: "2.5em"}}>All Menu Items</h1>

	const menuDisplay = menuType === "" ? 
		<>
		{breakfastMenu}
		{lunchMenu}
		{sidesMenu}
		{doughMenu}
		{drinksMenu}
		</>
		: menuType === "breakfast" ?
			breakfastMenu
		: menuType === "lunch" ?
			lunchMenu
		: menuType === "side" ?
			sidesMenu
		: menuType === "dough" ?
			doughMenu
		: menuType === "beverage" &&
			drinksMenu

	const buttonText = show ? "Hide Filters" : "Filter Menu"
	const displayBtns = show ? "" : "no-display"
	return (
		<div className='menu__container' id="menu">
			<div className="menu-legend">
				<h1>MENU</h1>
				<span className="bacon-legend">
					<FontAwesomeIcon 
						icon={ faBacon } 	
						color="red" 
						size="3x"
					/>  
					<span className="legend-description">= Local Favorite</span> 
				</span>
				<br/><br/>
				<div className="menu-selectors">
					<button onClick={() => setShow(!show)}>{buttonText}</button>
					<Fade duration={250} when={show}><div 
						className={`selector-radio-btns ${displayBtns}`}
					>
						<label>All Menu Items
							<input
								type="radio"
								name="menuType"
								value={menuType}
								checked={menuType === ""}
								onChange={() => setMenuType("")}
								onClick={() => setShow(!show)}
							/>
						</label>
						<label>Breakfast Menu
							<input
								type="radio"
								name="menuType"
								value={menuType}
								checked={menuType === "breakfast"}
								onChange={() => setMenuType("breakfast")}
								onClick={() => setShow(!show)}
							/>
						</label>
						<label>Lunch Menu
							<input
								type="radio"
								name="menuType"
								value={menuType}
								checked={menuType === "lunch"}
								onChange={() => setMenuType("lunch")}
								onClick={() => setShow(!show)}
							/>
						</label>
						<label>Sides
							<input
								type="radio"
								name="menuType"
								value={menuType}
								checked={menuType === "side"}
								onChange={() => setMenuType("side")}
								onClick={() => setShow(!show)}
							/>
						</label>
						<label>Homemade Dough
							<input
								type="radio"
								name="menuType"
								value={menuType}
								checked={menuType === "dough"}
								onChange={() => setMenuType("dough")}
								onClick={() => setShow(!show)}
							/>
						</label>
						<label>Beverages
							<input
								type="radio"
								name="menuType"
								value={menuType}
								checked={menuType === "beverage"}
								onChange={() => setMenuType("beverage")}
								onClick={() => setShow(!show)}
							/>
						</label>
					</div></Fade>
				</div>
			</div>
			{menuHeader}
			{menuDisplay}
		</div>
	);
}

export default Menu