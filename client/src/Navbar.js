// import React from 'react';

// const Navbar = () => {
// 	return (
// 		<header className='navbar__container'>
// 			<nav className='navbar'>
// 				<ul classname='navbar__menu'>
// 					<li className='navbar__item'><a className='nav__link' href='#'>Home</a></li>
// 					<li className='navbar__item'><a className='nav__link' href='#'>Menu</a></li>
// 					<li className='navbar__item'><a className='nav__link' href='#'>About</a></li>
// 					<li className='navbar__item'><a className='nav__link' href='#'>Contact</a></li>
// 					<li className='navbar__item'><a className='nav__link' href='#'>Directions</a></li>
// 				</ul>
// 			</nav>
// 		</header>
// 	)
// }

// export default Navbar;

import {bubble as Menu}  from 'react-burger-menu'
class Navbar extends React.Component{
	showSettings (event){
		event.preventDefault()
	}

render(){
	return (
		<header className='navbar__container'>
			<nav className='navbar'>
				<ul classname='navbar__menu'>
					<li className='navbar__item'><a className='nav__link' href='#'>Home</a></li>
					<li className='navbar__item'><a className='nav__link' href='#'>Menu</a></li>
					<li className='navbar__item'><a className='nav__link' href='#'>About</a></li>
					<li className='navbar__item'><a className='nav__link' href='#'>Contact</a></li>
					<li className='navbar__item'><a className='nav__link' href='#'>Directions</a></li>
					<li className= 'navbar__item'><a onClick={this.showSettings} className='navbar__link' href='' >Settings</a></li>
				</ul>
			</nav>
		</header>
		
	)
	
	}
}