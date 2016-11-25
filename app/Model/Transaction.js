'use strict'

const Lucid = use('Lucid')

class Transaction extends Lucid {
	static get table (){
		return 'transaction'
	}

	static get primaryKey(){
		return 'id_transaction'
	}
}

module.exports = Transaction
