'use strict'
const Hash = use('Hash')
class AuthController {
	// show login page
	* loginPage(req, res){
		// const hasil = yield Hash.make('admin')
		yield res.sendView('login')
	}

	// handle form login
	* postLogin(req, res){
		const email = req.input('email')
		const password = req.input('password')

		// const login = yield req.auth.login(email, password)
		try {
			yield req.auth.attempt(email, password)
		} catch (e) {
			yield req.with({errors: 'Email atau password salah'}).flash()
			res.route('login')
		}

		// if (login) {
			res.redirect('/')
		// } else {
		// 	req.with({error: 'Username atau Password salah'}).flash()
		// 	res.redirect('back')
		// }

	}

	// logout
	* logout(req, res){
		req.auth.logout()
		res.route('login')
	}
}

module.exports = AuthController
