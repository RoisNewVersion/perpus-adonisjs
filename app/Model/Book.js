'use strict'

const Lucid = use('Lucid')

class Book extends Lucid {
	static get table (){
		return 'book'
	}

	static get primaryKey(){
		return 'id_book'
	}

	category(){
		return this.belongsTo('App/Model/Category', 'id_book', 'book_id')
	}

	rack(){
		return this.belongsTo('App/Model/Rack', 'id_rack', 'rack_id')
	}
}

module.exports = Book
