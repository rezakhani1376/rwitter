import { useState } from 'react';
import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from 'firebase/auth';

const Auth = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const [newAccount, setNewAccount] = useState(true);

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
		if (newAccount) {
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
					console.log(errorMessage);
					setError(errorMessage);
					// ..
				});
		} else {
			signInWithEmailAndPassword(auth, email, password)
				.then((userCredential) => {
					// Signed in
					const user = userCredential.user;
					// ...
				})
				.catch((error) => {
					const errorCode = error.code;
					const errorMessage = error.message;
					setError(errorMessage);
				});
		}
	};
	const toggleAccount = () => {
		setNewAccount((prev) => !prev);
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
				<button type="submit">
					{newAccount ? 'Create Account' : 'Sign In'}
				</button>
				{error}
			</form>
			<div onClick={toggleAccount}>
				{newAccount ? 'Sign In' : 'Create Account'}
			</div>
			<button>Continue With Google</button>
			<button>Continue With GitHub</button>
		</div>
	);
};

export default Auth;
