import React from 'react'
import Fade from 'react-reveal'

const SideDrawer = props =>{
let drawerClasses = 'side_drawer'
if (props.show){
    drawerClasses='side_drawer open'
}

 return(
 <nav className={drawerClasses}  style={{height:document.body.clientHieght}}>
    
    <ul>
    <li><Fade left cascade when={props.show}><a href='#home'>Home</a></Fade></li>
    <li><Fade left cascade when={props.show}><a href='#menu'>Menu</a></Fade></li>
	<li><Fade left cascade when={props.show}><a href='#contact'>Contact</a></Fade></li>
	<li><Fade left  when={props.show}><a href="https://www.google.com/maps/dir//Criddle's+Cafe,+350+37th+St,+Ogden,+UT+84405/@41.196073,-111.9722274,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x87530f410524bf75:0x5f79eeb3dd479878!2m2!1d-111.9722274!2d41.196073">Directions</a></Fade></li>
    </ul>

</nav>
)
}


export default SideDrawer