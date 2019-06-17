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
    <li><a href=''>Home</a></li>
    <li><a href=''>Menu</a></li>
	<li><a href=''>Contact</a></li>
	<li><a href=''>Directions</a></li>
    </ul>
	</Fade>
</nav>
)
}


export default SideDrawer