import { useEffect, useState } from 'react';
import { collection, addDoc, query, onSnapshot } from 'firebase/firestore';
import { db } from '../fbase';

const Home = (props) => {
	const { userObj } = props;
	console.log(userObj.uid);

	const [rweet, setRweet] = useState('');
	const [rweets, setRweets] = useState([]);

	useEffect(() => {
		const q = query(collection(db, 'rweets'));
		onSnapshot(q, (querySnapshot) => {
			let updatedRweets = [];
			querySnapshot.forEach((doc) => {
				console.log(doc.data());
				const dbRweet = { id: doc.id, ...doc.data() };
				updatedRweets.push(dbRweet);
			});
			setRweets(updatedRweets);
		});
	}, []);

	const onSubmitHandler = async (event) => {
		event.preventDefault();

		try {
			const docRef = await addDoc(collection(db, 'rweets'), {
				text: rweet,
				createAt: Date.now(),
				creatorId: userObj.uid,
			});
			console.log('Document written with ID: ', docRef.id);
		} catch (e) {
			console.error('Error adding document: ', e);
		}
		setRweet('');
	};

	const onChangeHandler = (event) => {
		const enteredInput = event.target.value;
		setRweet(enteredInput);
		// console.log(rweet);
	};

	return (
		<div>
			<form onSubmit={onSubmitHandler}>
				<input
					type="text"
					placeholder="what's in your mind?"
					onChange={onChangeHandler}
					value={rweet}
					maxLength={120}
				></input>
				<button type="submit">Rweet</button>
			</form>
			{rweets.map((rweet) => (
				<div key={rweet.id}>{<h4>{rweet.text}</h4>}</div>
			))}
		</div>
	);
};

export default Home;
