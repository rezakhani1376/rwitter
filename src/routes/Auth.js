import { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

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
		const auth = getAuth();
		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				// Signed in
				const user = userCredential.user;
				console.log(user);
				// ...
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				console.log(error);
				// ..
			});
	};

	return (
		<div>
			<form onSubmit={onSubmit}>
				<input
					name="email"
					type="email"
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
