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
	const [loading, setLoading] = useState(false);

	const handleSubmit = () => {
		const data = {
			name: name.value,
			email: email.value,
			telephoneNumber: phoneNumber.value,
			message: message.value
		};
		setLoading(true);
		emailjs.send('service_o7pljfm', 'template_qt4stmb', data, process.env.REACT_APP_EMAILJS_PUBLIC_KEY)
			.then((res) => {
				if (res.status === 200) {
					setTimeout(() => {
						setLoading(false);
						setName({ value: '', valid: false });
						setEmail({ value: '', valid: false });
						setPhoneNumber({ value: '', valid: false });
						setMessage({ value: '', valid: false });
						setClearInput(true);
						// display success message
					}, 2000);
					setClearInput(false);
				} else {
					// display error message
				}
			});
	};

	return (
		<div className="page">
			<h1 className="title">Contact Us</h1>
			<form id="contactForm" style={loading ? { opacity: 0.8, pointerEvents: 'none' } : {}}>
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
					loading={loading}
				/>
			</form>
		</div>
	);
}
  
export default Contact;
  