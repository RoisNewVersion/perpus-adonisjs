'use strict'

const Lucid = use('Lucid')

class Income extends Lucid {
	static get table (){
		return 'income'
	}

	static get primaryKey(){
		return 'id_income'
	}
}

module.exports = Income
