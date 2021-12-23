import { getAuth, signOut, updateProfile } from 'firebase/auth';
import { useHistory } from 'react-router-dom';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../fbase';
import { useEffect, useState } from 'react';

const Profile = ({ refreshUser, userObj }) => {
	// console.log(userObj);

	const [newDisplayName, setNewDisplayName] = useState(userObj.displayName);

	const auth = getAuth();
	const history = useHistory();

	const onLogOutHandler = () => {
		signOut(auth)
			.then(() => {
				// Sign-out successful.
				// console.log('succes');
				history.push('/');
			
			})
			.catch((error) => {
				// An error happened.
			});
	};

	// const getMyRweets = async () => {
	// 	const rweets = collection(db, 'rweets');
	// 	const q = query(rweets, where('creatorId', '==', `${userObj.uid}`));
	// 	// console.log(q);
	// 	const querySnapshot = await getDocs(q);
	// 	querySnapshot.forEach((doc) => {
	// 		// doc.data() is never undefined for query doc snapshots
	// 		console.log(doc.id, ' => ', doc.data());
	// 	});
	// };

	// useEffect(() => {
	// 	getMyRweets();
	// }, []);

	const onDisplayNameChangeHandler = (event) => {
		const enteredDisplayName = event.target.value;
		setNewDisplayName(enteredDisplayName);
	};

	const onSubmitHandler = async (event) => {
		event.preventDefault();
		if (newDisplayName === userObj.displayName) {
			return;
		}
		const update = await updateProfile(auth.currentUser, {
			displayName: newDisplayName,
		});
		refreshUser();
	};

	return (
		<div>
			<form onSubmit={onSubmitHandler}>
				<input
					value={newDisplayName}
					type="text"
					placeholder="Display name"
					onChange={onDisplayNameChangeHandler}
				/>
				<button type="submit">Updated Profile</button>
			</form>
			<button onClick={onLogOutHandler}>Log Out</button>
		</div>
	);
};

export default Profile;
