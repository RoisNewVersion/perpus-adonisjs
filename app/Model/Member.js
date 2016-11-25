'use strict'

const Lucid = use('Lucid')

class Member extends Lucid {
	static get table (){
		return 'member'
	}

	static get primaryKey(){
		return 'id_member'
	}
}

module.exports = Member
