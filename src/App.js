import React, { Fragment, useEffect, useState } from 'react';
import Routes from './components/Routes';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

function App() {
	const auth = getAuth();
	const [init, setInit] = useState(false);
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [userObj, setUserObj] = useState(null);
	useEffect(() => {
		auth.onAuthStateChanged((user) => {
			if (user) {
				setIsLoggedIn(true);
				setUserObj(user)
			} else {
				setIsLoggedIn(false);
			}
			setInit(true);
		});
	}, []);
	return (
		<Fragment>
			{init ? <Routes isLoggedIn={isLoggedIn} userObj={userObj} /> : 'Initializing...'}
			<footer> &copy; {new Date().getFullYear()} Rwitter</footer>
		</Fragment>
	);
}

export default App;
