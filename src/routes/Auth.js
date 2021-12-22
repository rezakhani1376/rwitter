import { useState } from 'react';

const Auth = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const onChangeHandler = (event) => {
		const inputName = event.target.name;
		if (inputName === 'email') {
			setEmail(event.target.value);
		} else if (inputName === 'password') {
			setPassword(event.target.value);
		}
		// console.log(event.target.name);
		// console.log(event.target.value);
	};

	const onSubmit = (event) => {
		event.preventDefault();
	};

	return (
		<div>
			<form onSubmit={onSubmit}>
				<input
					name="email"
					type="text"
					placeholder="Email"
					required
					value={email}
					onChange={onChangeHandler}
				></input>
				<input
					type="password"
					name="password"
					placeholder="Password"
					required
					value={password}
					onChange={onChangeHandler}
				></input>
				<button type="submit">Log In</button>
			</form>
			<button>Continue With Google</button>
			<button>Continue With GitHub</button>
		</div>
	);
};

export default Auth;
