'use strict'

const Schema = use('Schema')

class MemberTableSchema extends Schema {

  up () {
    this.create('member', (table) => {
      table.increments()
      table.string('uid', 25)
      table.string('name', 35)
      table.string('date_of_birth', 150)
      table.date('registered')
      table.date('end_date')
      table.enu('active', ['0', '1'])
      table.timestamps()
    })
  }

  down () {
    this.drop('member')
  }

}

module.exports = MemberTableSchema
