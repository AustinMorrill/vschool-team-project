import React from 'react';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook, faInstagram, faYelp} from '@fortawesome/free-brands-svg-icons'



const Footer = () => {
	return (
		<div className='footer__container'>
			<div className='contact1'>
				<div className='address'>
					<h4 className='contacts'>Address</h4>
					<p className='addressp'>350 37th St, Ogden, UT 84405</p>
				</div>
				<div className='hours'>
					<h4 className='contacts'>Hours</h4>
					<span>Mon - Sat: 7am - 3pm
						Closed Sunday
					</span>
				</div>
				<div className='contactus'>
					<h4 className='contacts'>Contact Us</h4>
					<span> (801) 621 -4659
						<br/>
						<a href='#contact' className='contactUs'>criddlescafe@gmail.com</a>
					</span>
				</div>
			 </div>
			<div className='icons'>
					<a href='https://www.facebook.com/Criddles-Cafe-184266128299650/' className='facebook icon'>
					<FontAwesomeIcon icon={faFacebook} size="4x"/>
					</a>
					<a href='https://www.instagram.com/explore/locations/8642371/criddles-cafe/' className='instagram icon'>
					<FontAwesomeIcon icon={faInstagram} size="4x"/>
					</a>
					<a href='https://www.yelp.com/biz/criddles-cafe-south-ogden?osq=criddle%27s+cafe' className='yelp icon'>
					<FontAwesomeIcon icon={faYelp} size="4x"/>
					</a>
			</div >

		</div>
	);
}

export default Footer;
