import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './Button';
import { useState } from 'react';
import { useEffect } from 'react';
import './css/AlertBar.css';

export const AlertBar = (props) => {
	const { alertBarDisplay, alertBarText, type, callback } = props;
	const [isHidden, setIsHidden] = useState(true);
	const [showAlertBar, setShowAlertBar] = useState(alertBarDisplay);

	useEffect(() => {
		alertBarDisplay && setIsHidden(false);
		setShowAlertBar(alertBarDisplay);
	}, [alertBarDisplay]);

	const showAlertBarStyle = {
		animation: 'sinkAndFadeIn 0.75s forwards ease-in-out',
	};

	const hideAlertBarStyle = {
		animation: 'riseAndFadeOut 0.75s forwards ease-in-out'
	};

	const handleClose = () => {
		setShowAlertBar(false);
		callback && callback(false);
	};
	return (
		<div
			className="alertBar"
			style={{
				...(isHidden ? { display: 'none' } : { display: 'flex' }),
				...(alertBarDisplay ? showAlertBarStyle : hideAlertBarStyle),
				...(!showAlertBar ? hideAlertBarStyle : {}),
				backgroundColor: type === 'success' ? 'var(--secondary)' : 'var(--accent)'
			}}
		>
			<p className="alertBarText" style={{ color: 'white', marginLeft: '5px', flexGrow: 1 }}>{alertBarText}</p>
			<Button
				id="closeAlertBar"
				text="x"
				wrapperStyle={{ margin: '0 5px', padding: '2px 8px' }}
				callback={handleClose}
			/>
		</div>
	);
};

AlertBar.propTypes = {
	alertBarDisplay: PropTypes.bool,
	alertBarText: PropTypes.string,
	type: PropTypes.string,
	callback: PropTypes.func
};

AlertBar.defaultProps = {
	alertBarDisplay: false,
	alertBarText: '',
	type: 'success',
	callback: () => {}
};