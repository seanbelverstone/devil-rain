import React from 'react';
import PropTypes from 'prop-types';

// A custom component for your fallback UI
export const ErrorFallback = ({ error, resetErrorBoundary }) => {
	return (
		<div role="alert">
			<h2>Something went wrong:</h2>
			<pre style={{ color: 'red' }}>{error.message}</pre>
			<button onClick={resetErrorBoundary}>Try again</button>
		</div>
	);
};

ErrorFallback.propTypes = {
	error: PropTypes.object,
	resetErrorBoundary: PropTypes.func
};

ErrorFallback.defaultProps = {
	error: {
		message: ''
	},
	resetErrorBoundary: () => {}
};
