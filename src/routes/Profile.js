import { getAuth, signOut } from 'firebase/auth';
import { useHistory } from 'react-router-dom';
import { collection, query, where, getDocs  } from 'firebase/firestore';
import { db } from '../fbase';
import { useEffect } from 'react';

const Profile = ({ userObj }) => {
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

	const getMyRweets = async () => {
		const rweets = collection(db, 'rweets');
		const q = query(rweets, where('creatorId', '==', `${userObj.uid}`));
		// console.log(q);
		const querySnapshot = await getDocs(q);
		querySnapshot.forEach((doc) => {
			// doc.data() is never undefined for query doc snapshots
			console.log(doc.id, ' => ', doc.data());
		});
	};

	useEffect(() => {
		getMyRweets();
	}, []);

	return (
		<div>
			profile
			<button onClick={onLogOutHandler}>Log Out</button>
		</div>
	);
};

export default Profile;
