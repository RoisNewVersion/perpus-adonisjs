'use strict'

/*
|--------------------------------------------------------------------------
| Router
|--------------------------------------------------------------------------
|
| AdonisJs Router helps you in defining urls and their actions. It supports
| all major HTTP conventions to keep your routes file descriptive and
| clean.
|
| @example
| Route.get('/user', 'UserController.index')
| Route.post('/user', 'UserController.store')
| Route.resource('user', 'UserController')
*/

const Route = use('Route')

// Route.on('').render('welcome')
Route.group('secret', function(){
	Route.on('/').render('home')
	Route.resource('rack', 'RackController')
	Route.resource('category', 'CategoryController')
	Route.resource('fine', 'FineController')
	Route.resource('books', 'BookController')
	Route.resource('member', 'MemberController')
	Route.resource('transaction', 'TransController')
	Route.resource('income', 'IncomeController')
}).middleware('mustLogin')

Route.get('login', 'AuthController.loginPage').as('login')
Route.post('login', 'AuthController.postLogin').as('postLogin')
Route.post('logout', 'AuthController.logout').as('logout')