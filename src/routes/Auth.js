import { useState } from 'react';
import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	GoogleAuthProvider,
	GithubAuthProvider,
	signInWithPopup,
} from 'firebase/auth';

const Auth = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const [newAccount, setNewAccount] = useState(true);
	const auth = getAuth();

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

	const onSocialClick = (event) => {
		const {
			target: { name },
		} = event;
		let provider;
		if (name === 'google') {
			provider = new GoogleAuthProvider();
		} else if (name === 'github') {
			provider = new GithubAuthProvider();
		}

		signInWithPopup(auth, provider)
			.then((result) => {
				// This gives you a Google Access Token. You can use it to access the Google API.
				const credential = GoogleAuthProvider.credentialFromResult(result);
				const token = credential.accessToken;
				// The signed-in user info.
				const user = result.user;
				console.log(user);
				// ...
			})
			.catch((error) => {
				// Handle Errors here.
				const errorCode = error.code;
				const errorMessage = error.message;
				// The email of the user's account used.
				const email = error.email;
				// The AuthCredential type that was used.
				const credential = GoogleAuthProvider.credentialFromError(error);
				// ...
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
				<button type="submit">
					{newAccount ? 'Create Account' : 'Sign In'}
				</button>
				{error}
			</form>
			<div onClick={toggleAccount}>
				{newAccount ? 'Sign In' : 'Create Account'}
			</div>
			<button onClick={onSocialClick} name="google">
				Continue With Google
			</button>
			<button onClick={onSocialClick} name="github">
				Continue With GitHub
			</button>
		</div>
	);
};

export default Auth;
