import React,{Component} from 'react';
import HamburgerBtn from './HamburgerBtn'
import './App.css'





// sticky navbar 

	// this function just to check if the page scrolled or not 
	// componentDidMount(){
	// 	window.addEventListener('scroll', ()=>{
	// 		const isTop = window.scrollY < 100
	// 		if (isTop !== true){
	// 			{this.setState ({scrolled : true})}
	// 		}else {
	// 			{this.setState ({scrolled : false})}
	// 		}
	// 	})

	// }

	// componentWillUnmount(){
	// 	window.removeEventListener('scroll')

	// }

    // hamburgerBtnClickHandler=()=>{
	// this.setState((prevState)=>{
	//  return {sideDrawerOpen: !prevState.sideDrawerOpen}
	// })
	


const Navbar =(props)=>{

return(
		
			//{this.state.scrolled ? 'navbar' : 'navbar_scrolled'
			<div>
			<header className='navbar__container'>
			<nav className='navbar'> 
				{/* <nav className= {this.state.scrolled ? 'navbar_scrolled' : 'navbar'}> */}
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






