import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
	apiKey: 'AIzaSyBEWQMAxNx4_yTE1OpDufYoeutZG59PdPY',
	authDomain: 'rwitter-37d3e.firebaseapp.com',
	databaseURL: 'https://rwitter-37d3e.firebaseio.com',
	projectId: 'rwitter-37d3e',
	storageBucket: 'rwitter-37d3e.appspot.com',
	messagingSenderId: '1072656244567',
	appId: '1:1072656244567:web:bf9caf6dfd8e59d80c2812',
};

const fbase = initializeApp(firebaseConfig);

export const db = getFirestore();

export default fbase;
