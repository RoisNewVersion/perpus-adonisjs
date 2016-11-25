'use strict'

const Lucid = use('Lucid')

class Token extends Lucid {

	static get table (){
		return 'tokens'
	}

	static get primaryKey(){
		return 'id'
	}

  user () {
    return this.belongsTo('App/Model/User')
  }

}

module.exports = Token
