import React from 'react'
import Fade from 'react-reveal'

const SideDrawer = props =>{
let drawerClasses = 'side_drawer'
if (props.show){
    drawerClasses='side_drawer open'
}

 return(
 <nav className={drawerClasses}  style={{height:document.body.clientHieght}}>
    <Fade left cascade>
    <ul>
    <li><a href='#home'>Home</a></li>
    <li><a href='#menu'>Menu</a></li>
	<li><a href='#contact'>Contact</a></li>
	<li><a href="https://www.google.com/maps/dir//Criddle's+Cafe,+350+37th+St,+Ogden,+UT+84405/@41.196073,-111.9722274,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x87530f410524bf75:0x5f79eeb3dd479878!2m2!1d-111.9722274!2d41.196073">Directions</a></li>
    </ul>
	</Fade>
</nav>
)
}


export default SideDrawer