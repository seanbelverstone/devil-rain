import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './Button';
import './css/ErrorBoundary.css';

// A custom component for your fallback UI
export const ErrorFallback = ({ error }) => {
	return (
		<div className="page" id="errorPage">
			<div className="errorWrapper">
				<h2>Oops, something went wrong!</h2>
				<code style={{ color: 'red' }}>{error.message}</code>
				<p>Please contact us at <strong>devilrainband@gmail.com</strong> or our <a target="_blank" rel="noreferrer" href="https://www.facebook.com/groups/544578629743391">Facebook page</a> on with the error message above.</p>
				<p>We&apos;ll fix this as soon as possible!</p>
				<Button type="button" text="Refresh" callback={() => window.location.reload()}/>
			</div>
		</div>
	);
};

ErrorFallback.propTypes = {
	error: PropTypes.object
};

ErrorFallback.defaultProps = {
	error: {
		message: ''
	}
};
