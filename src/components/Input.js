/**
 * A useful Input component
 * @param id A unique identifier for the input
 * @param label The label to display above
 * @param type Can be a choice of [text, email, tel] or alternatively, it could be textarea.
 * @param callback The callback will return with the current state of the specific input
 */

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PhoneInput from 'react-phone-number-input';
import { isEmpty } from '../utils';
import 'react-phone-number-input/style.css';
import './css/Input.css';
import { isValidPhoneNumber } from 'react-phone-number-input';

const Input = (props) => {
	const { id, label, type, callback } = props;
	const [value, setValue] = useState('');
	const [error, setError] = useState('');

	useEffect(() => {
		setError('');
		const isValid = validate(value);
		const delayError = setTimeout(() => {
			isValid ? setError('') : setError(`Please enter a valid ${type === 'tel' ? 'telephone number' : type}.`);
		}, 1000);
		callback({
			value,
			valid: isValid
		});
		return () => clearTimeout(delayError);
	}, [value]);

	const handleInputChange = (e) => setValue(e?.target ? e.target.value : e);

	const validate = (currentValue) => {
		if (isEmpty(currentValue)) {
			return false;
		}
		if (type === 'name') {
			const re = /^[a-zA-Z]{2,}\s[a-zA-Z]+$/;
			return re.test(currentValue);
		}
		if (type === 'email') {
			const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			return re.test(currentValue);
		}
		if (type === 'tel') {
			return isValidPhoneNumber(currentValue);
		}
		return true;
	};

	return (
		<div className="inputWrapper">
			<label className="label">{label}</label>
			{(type === 'name' || type === 'email') && (
				<input
					className="input"
					type={type}
					id={id}
					name={id}
					value={value}
					onChange={handleInputChange}
				/>
			)}
			{type === 'textarea' && (
				<textarea
					className="textarea"
					type={type}
					id={id}
					name={id}
					value={value}
					onChange={handleInputChange}
				/>
			)}
			{type === 'tel' && (
				<PhoneInput
					defaultCountry="GB"
					value={value}
					onChange={handleInputChange}
					international
				/>
			)}
			{!isEmpty(error) && !isEmpty(value) && (
				<div className="error" style={{ color: 'var(--accent)'}}>
					{error}
				</div>
			)}
		</div>
	);
};

Input.propTypes = {
	id: PropTypes.string,
	label: PropTypes.string,
	type: PropTypes.string,
	callback: PropTypes.func
};

Input.defaultProps = {
	id: '',
	label: '',
	type: '',
	callback: () => {}
};

export default Input;