import { useEffect, useState } from 'react';
import { collection, addDoc, query, onSnapshot } from 'firebase/firestore';
import { db } from '../fbase';
import Rweet from '../components/Rweet';

const Home = (props) => {
	const { userObj } = props;
	// console.log(userObj.uid);

	const [rweet, setRweet] = useState('');
	const [rweets, setRweets] = useState([]);
	const [attachment, setAttachment] = useState(null);

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

	const onFileChangeHandler = (event) => {
		const file = event.target.files[0];
		const reader = new FileReader();
		reader.onloadend = (finishedEvent) => {
			console.log(finishedEvent);
			setAttachment(finishedEvent.currentTarget.result);
		};
		reader.readAsDataURL(file);
		// console.log(file);
	};

	const onClearAttachmentHandler = () => setAttachment(null);

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
				<input
					type="file"
					accept="image/*"
					onChange={onFileChangeHandler}
				></input>
				<button type="submit">Rweet</button>
				{attachment && (
					<div>
						<img src={attachment} width="50px" height="50px" />
						<button onClick={onClearAttachmentHandler}>Clear</button>
					</div>
				)}
			</form>
			{rweets.map((rweet) => (
				<Rweet
					key={rweet.id}
					rweetObj={rweet}
					isOwner={userObj.uid === rweet.creatorId}
				/>
			))}
		</div>
	);
};

export default Home;
