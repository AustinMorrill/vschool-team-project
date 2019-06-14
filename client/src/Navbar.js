import React from 'react';

class Navbar extends React.Component{
	constructor(){
		super()
		this.state={
			isOpen:true
		}



		toggleMenu=()=>{
			this.setState({isOpen : !state.isOpen})
		}
	}

		render(){
	return (
		<header className='navbar__container'>
			<div className='hamburger' onClick={this.toggleMenu}>
				<span className = 'line'></span>
				<span className = 'line'></span>
				<span className = 'line'></span>
			</div>
			<nav className='navbar'>
				<ul classname='navbar__menu'>
					<li className='navbar__item'><a className='nav__link' href='#'>Home</a></li>
					<li className='navbar__item'><a className='nav__link' href='#'>Menu</a></li>
					<li className='navbar__item'><a className='nav__link' href='#'>About</a></li>
					<li className='navbar__item'><a className='nav__link' href='#'>Contact</a></li>
					<li className='navbar__item'><a className='nav__link' href='#'>Directions</a></li>
				</ul>
			</nav>
		</header> 
	)
		}

}
export default Navbar;

// import {bubble as Menu}  from 'react-burger-menu'
// class Navbar extends React.Component{
// 	constructor(){
// 		super()
// 		this.state = {
// 			isOpen : true
// 		}
		
// 	}
// 	showSettings (event){
// 		event.preventDefault()
// 	}
// 	handleChange(){
// 		this.setState({isOpen : state.isOpen})

// 	}
// 	toggleMenu(){
// 		this.setState(state => !state.isOpen)
// 	}
	

// render(){
// 	return (
// 	      <div>
// 			<Menu className = 'navbar' 
// 			      onChenge = {this.handleChange} >
				
// 					<a className='nav__link' href='#'>Home</a>
// 					<a className='nav__link' href='#'>Menu</a>
// 					<a className='nav__link' href='#'>About</a>
// 					<a className='nav__link' href='#'>Contact</a>
// 					<a className='nav__link' href='#'>Directions</a>
// 					<a onClick={this.showSettings} className='navbar__link' href='' >Settings</a>
				
// 			</Menu>
// 			</div>

// 	)
	
// 	}
// }