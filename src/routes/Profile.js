import { getAuth, signOut } from 'firebase/auth';
import { useHistory } from 'react-router-dom';

const Profile = () => {
	const auth = getAuth();
	const history = useHistory();
	const onLogOutHandler = () => {
		signOut(auth)
			.then(() => {
				// Sign-out successful.
				console.log('succes');
				history.push('/');
			})
			.catch((error) => {
				// An error happened.
			});
	};

	return (
		<div>
			profile
			<button onClick={onLogOutHandler}>Log Out</button>
		</div>
	);
};

export default Profile;
