'use strict'

const Lucid = use('Lucid')

class User extends Lucid {

	static get table (){
		return 'users'
	}

	static get primaryKey(){
		return 'id_user'
	}

  apiTokens () {
    return this.hasMany('App/Model/Token', 'id_user', 'user_id')
  }

}

module.exports = User
