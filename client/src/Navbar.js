import React,{Component} from 'react';
import HamburgerBtn from './HamburgerBtn'
import './Navbar.css'
import './App.css'








const Navbar =(props)=>{

return(
		
		
			<div>
			<header className='navbar__container'>
			<nav className='navbar'> 
		<h4 className='resName'>CRIDDLE'S CAFE</h4>
				
				<div>
                 <HamburgerBtn click = {props.hamburgerClickHandler} cross={props.corssHandler}/>
				</div>
				  <div className='navegation'>
					<a className='nav__link' href='#home'>Home</a>
				    <a className='nav__link' href='#menu'>Menu</a>
					<a className='nav__link' href='#contact'>Contact</a>
					<a className='nav__link' href="https://www.google.com/maps/dir//Criddle's+Cafe,+350+37th+St,+Ogden,+UT+84405/@41.196073,-111.9722274,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x87530f410524bf75:0x5f79eeb3dd479878!2m2!1d-111.9722274!2d41.196073">Directions</a>
			     </div>
				</nav>
			</header> 
			</div>
		
)

}


export default Navbar;






