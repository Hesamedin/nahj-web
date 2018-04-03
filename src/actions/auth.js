import { firebase, googleAuthProvider } from './../firebase'

export const ACTION_LOGIN = "ActionLogin"
export const ACTION_LOGIN_BY_EMAIL = "ActionLoginByEmail"
export const ACTION_LOGIN_BY_GOOGLE = "ActionLoginByGoogle"
export const ACTION_LOGOUT = "ActionLogOut"

export const loginByEmailAction = () => ({
	type: ACTION_LOGIN_BY_EMAIL
})

export const loggedInByGoogle = (uid) => ({
    type: ACTION_LOGIN_BY_GOOGLE,
	uid
})

export const loginAction = (uid) => ({
	type: ACTION_LOGIN,
	uid
});

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

export const startLoginByGoogle = (nextAction, onErrorByGoogleLogin) => {
	console.log("Login by Google...")
		return firebase.auth().signInWithPopup(googleAuthProvider)
			.then(() => {
				console.log("Successful Login!")
				nextAction()
			})
			.catch((error) => {
                console.log("oops, Couldn't login. Message: " + error.message)
                onErrorByGoogleLogin(error.message)
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