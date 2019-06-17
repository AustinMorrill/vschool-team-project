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
			<nav className= 'navbar'> 
				{/* <nav className= {this.state.scrolled ? 'navbar_scrolled' : 'navbar'}> */}
				<div>
                 <HamburgerBtn click = {props.hamburgerClickHandler} cross={props.corssHandler}/>
				</div>
				  <div className='navegation'>
					<a className='nav__link' href='#'>Home</a>
				    <a className='nav__link' href='#'>Menu</a>
					<a className='nav__link' href='#'>Contact</a>
					<a className='nav__link' href='#'>Directions</a>
			     </div>
				</nav>
			</header> 
			</div>
		
)

}


export default Navbar;






