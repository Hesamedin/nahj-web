import * as firebase from 'firebase';

// Initialize Firebase
const config = {
	apiKey: "AIzaSyBehOFQ3UTcfCdDw1j81HwzRscDfsBkzYA",
	authDomain: "nahj.firebaseapp.com",
	databaseURL: "https://nahj.firebaseio.com",
	projectId: "project-625925426150453512",
	storageBucket: "project-625925426150453512.appspot.com",
	messagingSenderId: "842597084486"
};

firebase.initializeApp(config);

const database = firebase.database();
const emailAuthProvider = new firebase.auth.EmailAuthProvider();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, emailAuthProvider, googleAuthProvider, database as default };