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