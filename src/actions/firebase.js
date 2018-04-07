import database from './../firebase'
const DASHTI_LETTERS = '/farsi/dashti/letters'

export const ACTION_GET_LETTERS = 'ActionGetLetters'

export const setLettersAction = letters => ({
	type: ACTION_GET_LETTERS,
	letters
})

export const getListOfLetters = (start, end) => {
	return database.ref(DASHTI_LETTERS)
		.orderByKey()
		.startAt(start)
		.endAt(end)
		.once('value')
		.then((snapshot) => {
			const articles = [];
			snapshot.forEach((element) => {
				articles.push({
					id: element.key,
					...element.val()
				})
			})

			return articles
			// dispatch(setLettersAction(articles))
		})
}