import React from 'react';
import PropTypes from 'prop-types';
import { LoadingIcon } from './LoadingIcon.js';
import { isEmpty } from '../utils.js';
import './css/Button.css';

export const Button = props => {
	const { id, className, callback, text, type, wrapperStyle, validFields, loading } = props;
	const buttonDisabled = !(validFields.every(field => field === true));

	const handleCallback = (e) => {
		if (!e?.key || e.key === 'Enter') {
			e.preventDefault();
			!buttonDisabled && callback && callback(e);
		}
	};

	return (
		<button
			id={id}
			className={`button${!isEmpty(className) ? ` ${className}` : ''}`}
			type={type}
			onClick={handleCallback}
			onKeyDown={handleCallback}
			style={{ ...wrapperStyle, ...(loading ? { pointerEvents: 'none' } : {}) }}
			disabled={buttonDisabled || loading}
		>
			{loading ? (
				<LoadingIcon />
			) : <div className="buttonText">{text}</div>}
		</button>
	);
};

Button.propTypes = {
	id: PropTypes.string,
	className: PropTypes.string,
	callback: PropTypes.func,
	text: PropTypes.string,
	type: PropTypes.string,
	wrapperStyle: PropTypes.oneOfType([PropTypes.object]),
	validFields: PropTypes.oneOfType([PropTypes.array]),
	loading: PropTypes.bool
};

Button.defaultProps = {
	id: '',
	className: '',
	callback: () => {},
	text: '',
	type: 'button',
	wrapperStyle: {},
	validFields: [],
	loading: false
};