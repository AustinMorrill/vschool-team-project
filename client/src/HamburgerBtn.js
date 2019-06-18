import React from 'react'
import './App.css'
import './Navbar.css'

const hamburgerBtn = props => (
	<button className='hamburger_btn' onClick={props.click}>
		<div className='hamburger-line one' />
		<div className='hamburger-line two' />
		<div className='hamburger-line three' />
	</button>
)

export default hamburgerBtn