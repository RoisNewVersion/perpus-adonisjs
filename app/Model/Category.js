'use strict'

const Lucid = use('Lucid')

class Category extends Lucid {
	static get table (){
		return 'category'
	}

	static get primaryKey(){
		return 'id_category'
	}

	category(){
		return this.hasOne('App/Model/Book')
	}
}

module.exports = Category
