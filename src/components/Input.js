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
	const { id, label, type, callback, clearInput } = props;
	const [value, setValue] = useState('');
	const [error, setError] = useState('');

	useEffect(() => {
		setError('');
		const isValid = validate(value);
		const delayError = setTimeout(() => {
			isValid ? setError('') : setCustomErrorText();
		}, 1000);
		callback({
			value,
			valid: isValid
		});
		return () => clearTimeout(delayError);
	}, [value]);

	useEffect(() => {
		if (clearInput) {
			setValue('');
			setError('');
		}
	}, [clearInput]);

	const handleInputChange = (e) => setValue(e?.target ? e.target.value : e);

	const setCustomErrorText = () => {
		if (type === 'name' || type === 'email') {
			setError(`Please enter a valid ${type}.`);
		} else if (type === 'tel') {
			setError('Please enter a valid telephone number.');
		} else {
			setError('Messages must be longer than 10 characters.');
		}
	};

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
		if (type === 'textarea') {
			return currentValue.length > 10;
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
				<div className="error">
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
	callback: PropTypes.func,
	clearInput: PropTypes.bool
};

Input.defaultProps = {
	id: '',
	label: '',
	type: '',
	callback: () => {},
	clearInput: false
};

export default Input;