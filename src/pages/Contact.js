import React, { useState } from 'react';
import Input from '../components/Input';
import { Button } from '../components/Button';
import emailjs from 'emailjs-com';
import './css/Contact.css';


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
	const [clearInput, setClearInput] = useState(false);

	const handleSubmit = () => {
		const data = {
			name: name.value,
			email: email.value,
			telephoneNumber: phoneNumber.value,
			message: message.value
		};
		// add loading symbol while it sends
		emailjs.send('service_o7pljfm', 'template_qt4stmb', data, process.env.REACT_APP_EMAILJS_PUBLIC_KEY)
			.then((res) => {
				console.log(res, res.status === 200);
				if (res.status === 200) {
					setTimeout(() => {
						setName({ value: '', valid: false });
						setEmail({ value: '', valid: false });
						setPhoneNumber({ value: '', valid: false });
						setMessage({ value: '', valid: false });
						setClearInput(true);
						// stop loading here
						// display success message
					}, 2000);
					setClearInput(false);
				}
			});
	};

	return (
		<div className="page">
			<h1 className="title">Contact Us</h1>
			<form id="contactForm">
				<Input
					id="name"
					label="Full Name"
					type="name"
					callback={setName}
					clearInput={clearInput}
				/>
				<Input
					id="email"
					label="Email"
					type="email"
					callback={setEmail}
					clearInput={clearInput}
				/>
				<Input
					id="phoneNumber"
					label="Phone Number"
					type="tel"
					callback={setPhoneNumber}
					clearInput={clearInput}
				/>
				<Input
					id="message"
					label="Message"
					type="textarea"
					callback={setMessage}
					clearInput={clearInput}
				/>
				<Button
					type="button"
					text="Submit"
					callback={handleSubmit}
					validFields={[name.valid, email.valid, phoneNumber.valid, message.valid]}
				/>
			</form>
		</div>
	);
}
  
export default Contact;
  