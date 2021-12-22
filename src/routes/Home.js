import { useState } from 'react';
import { collection, addDoc } from "firebase/firestore"; 
import { db } from '../fbase';

const Home = () => {
	const [rweet, setRweet] = useState('');

	const onSubmitHandler = async(event) => {
		event.preventDefault();

		try {
			const docRef = await addDoc(collection(db, "rweets"), {
				rweet,
				createAt: Date.now(),
			});
			console.log("Document written with ID: ", docRef.id);
		} catch (e) {
			console.error("Error adding document: ", e);
		}
		setRweet('')
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
		</div>
	);
};

export default Home;
