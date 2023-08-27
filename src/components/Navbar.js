import React from 'react';
import contactIcon from '../assets/icons/contactIcon.png';
import homeIcon from '../assets/icons/homeIcon.png';
import merchIcon from '../assets/icons/merchIcon.png';
import videoIcon from '../assets/icons/videoIcon.png';

function Navbar() {
	return (
		<div className="navbar">
			<img src={homeIcon} />
			<img src={videoIcon} />
			<img src={contactIcon} />
			<img src={merchIcon} />
		</div>
	);
}
  
export default Navbar;
  