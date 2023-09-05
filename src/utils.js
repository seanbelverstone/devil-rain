import { useState, useEffect } from 'react';

export const isEmpty = (value) => {
	const valueType = typeof value;
	switch (valueType) {
	case 'object':
		return Object.entries(value).length === 0;
	case 'array':
		return value.length === 0;
	default:
		return !value || value.length === 0;
	}
};

export function debounce(func, wait, immediate) {
	var timeout;
	return function () {
		var context = this,
			args = arguments;
		var later = function () {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
}

export function useWindowSize() {
	function getSize() {
		return {
			width: window.innerWidth,
			height: window.innerHeight,
		};
	}
  
	const [windowSize, setWindowSize] = useState(getSize);
  
	useEffect(() => {
		// Debounce to avoid the function fire multiple times
		var handleResizeDebounced = debounce(function handleResize() {
			setWindowSize(getSize());
		}, 250);
  
		window.addEventListener('resize', handleResizeDebounced);
		return () => window.removeEventListener('resize', handleResizeDebounced);
	}, []);
  
	return windowSize;
}