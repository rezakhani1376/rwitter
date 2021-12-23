import React, { Fragment, useEffect, useState } from 'react';
import Routes from './components/Routes';
import { getAuth } from 'firebase/auth';

function App() {
	const auth = getAuth();
	const [init, setInit] = useState(false);
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [userObj, setUserObj] = useState(null);
	useEffect(() => {
		auth.onAuthStateChanged((user) => {
			if (user) {
				setIsLoggedIn(true);
				// setUserObj(user);
				setUserObj({ displayName: user.displayName, uid: user.uid });
			} else {
				setIsLoggedIn(false);
				setUserObj(null);
			}
			setInit(true);
		});
	}, []);

	const refreshUser = async () => {
		const user = await auth.currentUser;
		console.log(user.displayName);
		// setUserObj(Object.assign({}, user));
		setUserObj(() => {
			return { displayName: user.displayName, uid: user.uid };
		});
	};

	return (
		<Fragment>
			{init ? (
				<Routes
					refreshUser={refreshUser}
					isLoggedIn={isLoggedIn}
					userObj={userObj}
				/>
			) : (
				'Initializing...'
			)}
			<footer> &copy; {new Date().getFullYear()} Rwitter</footer>
		</Fragment>
	);
}

export default App;
