import React, { Fragment } from 'react';
import Routes from './components/Routes';

function App() {
	return (
		<Fragment>
			<Routes />
			<footer> &copy; {new Date().getFullYear()}</footer>
		</Fragment>
	);
}

export default App;
