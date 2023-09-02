/**
 * A useful Input component
 * @param id A unique identifier for the input
 * @param label The label to display above
 * @param type Can be a choice of [text, email, tel] or alternatively, it could be textarea.
 * @param callback The callback will return with the current state of the specific input
 */

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './css/Input.css';
import { isEmpty } from '../utils';

const Input = (props) => {
	const { id, label, type, callback } = props;
	const [value, setValue] = useState('');
	const [error, setError] = useState('');

	useEffect(() => {
		const isValid = validate(value);
		isValid ? setError('') : setError(`Please enter a valid ${type === 'tel' ? 'telephone number' : type}.`);
		callback({
			value,
			valid: isValid
		});
	}, [value]);

	const handleInputChange = (e) => setValue(e.target.value);

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
		return true;
	};

	return (
		<div className="inputWrapper">
			<label>
				{label}
				{type !== 'textarea' ? (
					<input
						className="input"
						type={type}
						id={id}
						name={id}
						value={value}
						onChange={handleInputChange}
					/>
				) : (
					<textarea
						className="textarea"
						type={type}
						id={id}
						name={id}
						value={value}
						onChange={handleInputChange}
					/>
				)}
			</label>
			{error && !isEmpty(value) && (
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