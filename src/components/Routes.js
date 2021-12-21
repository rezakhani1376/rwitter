import { Fragment, useState } from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Home from '../routes/Home';
import Auth from '../routes/Auth';

const Routes = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	
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
