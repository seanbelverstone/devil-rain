import React from 'react';
import PropTypes from 'prop-types';
import { LoadingIcon } from './LoadingIcon.js';
import './css/Button.css';

export const Button = props => {
	const { callback, text, type, wrapperStyle, validFields, loading } = props;
	const buttonDisabled = !(validFields.every(field => field === true));

	const handleCallback = (e) => {
		e.preventDefault();
		console.log(!buttonDisabled);
		!buttonDisabled && callback && callback();
	};

	return (
		<button
			className="button"
			type={type}
			onClick={handleCallback}
			onKeyDown={handleCallback}
			style={{ ...wrapperStyle, ...(loading ? { pointerEvents: 'none' } : {}) }}
			disabled={buttonDisabled || loading}
		>
			{loading ? (
				<LoadingIcon />
			) : text}
		</button>
	);
};

Button.propTypes = {
	callback: PropTypes.func,
	text: PropTypes.string,
	type: PropTypes.string,
	wrapperStyle: PropTypes.oneOfType([PropTypes.object]),
	validFields: PropTypes.oneOfType([PropTypes.array]),
	loading: PropTypes.bool
};

Button.defaultProps = {
	callback: () => {},
	text: '',
	type: 'button',
	wrapperStyle: {},
	validFields: [],
	loading: false
};