import React, { useState } from 'react';
import style from './inputStyle.module.css';

function Input(props) {
	// const [data, setData] = useState('');
	return (
		<input
			type={props.type}
			placeholder={props.placeholder}
			className={style.inputField}
			name={props.name}
			value={props.value}
			onChange={props.onChange}
			spellCheck="false"
			autoComplete="true"
			required
		/>
	);
}

export default Input;
