import { firebase } from './../firebase'

export const ACTION_LOGIN_BY_EMAIL = "ActionLogInByEmail"
export const ACTION_LOGOUT = "ActionLogOut"

export const loginByEmailAction = () => ({
	type: ACTION_LOGIN_BY_EMAIL
})

export const logoutAction = () => ({
	type: ACTION_LOGOUT
})

export const startLoginByEmail = (email, password, nextAction) => {
	console.log("Firebase signin...")
	firebase.auth().signInWithEmailAndPassword(email, password)
		.then(() => {
			console.log("Successful Login!")
			nextAction()
		})
		.catch((error) => {
			console.log("oops, Couldn't login. Message: " + error.message)
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