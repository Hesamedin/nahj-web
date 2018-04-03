import { firebase, googleAuthProvider } from './../firebase'

export const ACTION_LOGIN_BY_EMAIL = "ActionLogInByEmail"
export const ACTION_LOGOUT = "ActionLogOut"

export const loginByEmailAction = () => ({
	type: ACTION_LOGIN_BY_EMAIL
})

export const logoutAction = () => ({
	type: ACTION_LOGOUT
})

export const startLoginByEmail = (email, password, nextAction, onErrorByEmailLogin) => {
	console.log("Login by email...")
	firebase.auth().signInWithEmailAndPassword(email, password)
		.then(() => {
			console.log("Successful Login!")
			nextAction()
		})
		.catch((error) => {
			console.log("oops, Couldn't login. Message: " + error.message)
			onErrorByEmailLogin(error.message)
		})
}

export const startLoginByGoogle = (nextAction) => {
	console.log("Login by Google...")
		return firebase.auth().signInWithPopup(googleAuthProvider)
			.then(() => {
				console.log("Successful Login!")
				nextAction()
			})
			.catch((error) => {

			})
}

export const startLogout = (nextAction) => {
	console.log("Firebase signout...")
	firebase.auth().signOut()
		.then(() => {
			console.log("Signed out.")
			nextAction()
		})
		.catch((error) => {
			console.log("oops, Couldn't logout. Message: " + error.message)
		})
}