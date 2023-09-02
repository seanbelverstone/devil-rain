
import React from 'react';
import PropTypes from 'prop-types';
import './css/Button.css';

export const Button = props => {
	const { callback, text, type, wrapperStyle } = props;

	const handleCallback = (e) => {
		e.preventDefault();
		callback && callback();
	};

	return (
		<button
			className="button"
			type={type}
			onClick={handleCallback}
			onKeyDown={handleCallback}
			style={wrapperStyle}
		>
			{text}
		</button>
	);
};

Button.propTypes = {
	callback: PropTypes.func,
	text: PropTypes.string,
	type: PropTypes.string,
	wrapperStyle: PropTypes.oneOfType([PropTypes.object])
};

Button.defaultProps = {
	callback: () => {},
	text: '',
	type: 'button',
	wrapperStyle: {}
};