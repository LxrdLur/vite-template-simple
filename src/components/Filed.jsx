import React from 'react';

const Field = (props) => {
	const {
		className = '',
		id,
		label,
		type = 'text',
		onInput,
	} = props

	const handleInput = (event) => {
		onInput(event.target.value);
	};

	return (
		<div className={`field ${className}`}>
			<label
				className="field__label"
				htmlFor={id}
			>
				{label}
			</label>
			<input
				className="field__input"
				id={id}
				placeholder=" "
				autoComplete="off"
				type={type}
				onInput={handleInput}
			/>
		</div>
	);
};

export default Field;