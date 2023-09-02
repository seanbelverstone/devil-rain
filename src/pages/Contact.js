/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './css/Contact.css';
import Input from '../components/Input';


function Contact() {
	const [name, setName] = useState({
		value: '',
		valid: false
	});
	const [email, setEmail] = useState({
		value: '',
		valid: false
	});
	const [phoneNumber, setPhoneNumber] = useState({
		value: '',
		valid: false
	});
	const [message, setMessage] = useState({
		value: '',
		valid: false
	});

	return (
		<div className="page">
			<h1 className="title">Contact</h1>
			<form id="contactForm">
				<Input
					id="name"
					label="Full Name"
					type="name"
					callback={setName}
				/>
				<Input
					id="email"
					label="Email"
					type="email"
					callback={setEmail}
				/>
				<Input
					id="phoneNumber"
					label="Phone Number"
					type="tel"
					callback={setPhoneNumber}
				/>
				<Input
					id="message"
					label="Message"
					type="textarea"
					callback={setMessage}
				/>
			</form>
		</div>
	);
}
  
export default Contact;
  