import { useEffect, useState } from 'react';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { db } from '../fbase';

const Home = () => {
	const [rweet, setRweet] = useState('');
	const [rweets, setRweets] = useState([]);

	const getRweets = async () => {
		const querySnapshot = await getDocs(collection(db, 'rweets'));
		querySnapshot.forEach((doc) => {
			// console.log(`${doc.id} => ${doc.data()}`);
			console.log(doc.data());
			const rweetObject = {
				...doc.data(),
				id: doc.id,
			};
			setRweets((prev) => [rweetObject, ...prev]);
		});
	};

	useEffect(() => {
		getRweets();
		console.log('in');
	}, []);

	const onSubmitHandler = async (event) => {
		event.preventDefault();

		try {
			const docRef = await addDoc(collection(db, 'rweets'), {
				rweet,
				createAt: Date.now(),
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
		console.log(rweet);
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
				<div key={rweet.id}>{<h4>{rweet.rweet}</h4>}</div>
			))}
		</div>
	);
};

export default Home;
