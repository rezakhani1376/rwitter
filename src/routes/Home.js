import { useState } from 'react';

const Home = () => {
	const [rweet, setRweet] = useState('');

	const onSubmitHandler = (event) => {
		event.preventDefault();
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
