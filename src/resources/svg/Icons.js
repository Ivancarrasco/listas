import * as React from 'react';

export const IconAddMark = (props) => {
	const { className } = props;
	return (
		<svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24">
			<path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z" />
		</svg>
	);
};

export const IconRemoveMark = (props) => {
	const { className } = props;
	return (
		<svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24">
			<path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-12v-2h12v2z" />
		</svg>
	);
};
