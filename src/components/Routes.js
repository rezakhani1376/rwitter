import { Fragment, useState } from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Home from '../routes/Home';
import Auth from '../routes/Auth';
import { getAuth } from 'firebase/auth';

const Routes = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const auth = getAuth();
	const user = auth.currentUser;

	if (user) {
		// User is signed in, see docs for a list of available properties
		// https://firebase.google.com/docs/reference/js/firebase.User
		// ...
		console.log('yesss');
	} else {
		// No user is signed in.
		console.log('NOOOO');
	}

	return (
		<Router>
			<Switch>
				{isLoggedIn ? (
					<Fragment>
						<Route exact path="/">
							<Home />
						</Route>
					</Fragment>
				) : (
					<Route exact path="/">
						<Auth />
					</Route>
				)}
			</Switch>
		</Router>
	);
};

export default Routes;
