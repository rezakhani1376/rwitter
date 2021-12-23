import { Fragment } from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Home from '../routes/Home';
import Auth from '../routes/Auth';
import { getAuth } from 'firebase/auth';
import Navigation from './Navigation';
import Profile from '../routes/Profile';

const Routes = (props) => {
	const { isLoggedIn, userObj, refreshUser } = props;
	const auth = getAuth();
	const user = auth.currentUser;

	if (user) {
		// User is signed in, see docs for a list of available properties
		// https://firebase.google.com/docs/reference/js/firebase.User
		// ...
		// console.log('yesss');
	} else {
		// No user is signed in.
		// console.log('NOOOO');
	}

	return (
		<Router>
			{isLoggedIn && <Navigation userObj={userObj} />}
			<Switch>
				{isLoggedIn ? (
					<Fragment>
						<Route exact path="/">
							<Home userObj={userObj} />
						</Route>
						<Route exact path="/profile">
							<Profile userObj={userObj} refreshUser={refreshUser} />
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
