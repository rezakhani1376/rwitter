import { useState } from 'react';
import { db } from '../fbase';
import { doc, deleteDoc, updateDoc } from 'firebase/firestore';

const Rweet = ({ rweetObj: rweet, isOwner }) => {
	const [isEditing, setIsEditing] = useState(false);
	const [input, setInput] = useState(rweet.text);

	const onDeleteHandler = async () => {
		const ok = window.confirm('Are you sure want to delete this rweet?');
		if (ok) {
			await deleteDoc(doc(db, 'rweets', `${rweet.id}`));
		}
	};

	const updateHandler = async () => {
		const rweeet = doc(db, 'rweets', `${rweet.id}`);
		await updateDoc(rweeet, {
			text: input,
		});
	};

	const onEditHandler = async () => {
		setIsEditing(true);
	};

	const onCancelEditHandler = () => {
		setIsEditing(false);
		setInput(rweet.text);
	};

	const onSubmitHandler = (event) => {
		event.preventDefault();
		updateHandler();
		setIsEditing(false);
	};

	const onChangeHandler = (event) => {
		const enteredInput = event.target.value;
		console.log(enteredInput);
		setInput(enteredInput);
	};
	// console.log(rweet.attachmentUrl);

	return (
		<div>
			{
				<div>
					<h4>{rweet.text}</h4>
					{rweet.attachmentUrl && (
						<img
							src={rweet.attachmentUrl}
							alt="this is a image"
							width="100px"
							height="100px"
						/>
					)}
				</div>
			}
			{isEditing && (
				<div>
					<form onSubmit={onSubmitHandler}>
						<input
							value={input}
							onChange={onChangeHandler}
							type="text"
							placeholder="Edit your rweet"
							required
						></input>
						<button onClick={onCancelEditHandler}>Cancel</button>
						<button type="submit">confirm</button>
					</form>
				</div>
			)}
			{isOwner && !isEditing && (
				<>
					<button onClick={onDeleteHandler}>Delete Rweeet</button>
					<button onClick={onEditHandler}>Edit Rweet</button>
				</>
			)}
		</div>
	);
};

export default Rweet;
