'use strict'

const Lucid = use('Lucid')

class Rack extends Lucid {
	static get table (){
		return 'rack'
	}

	static get primaryKey(){
		return 'id_rack'
	}

	rack(){
		return this.hasOne('App/Model/Book')
	}
}

module.exports = Rack
