'use strict'

const Lucid = use('Lucid')

class Fine extends Lucid {
	static get table (){
		return 'fine'
	}

	static get primaryKey(){
		return 'id_fine'
	}
}

module.exports = Fine
