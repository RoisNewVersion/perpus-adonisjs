'use strict'

const Schema = use('Schema')

class RackTableSchema extends Schema {

  up () {
    this.create('rack', (table) => {
      table.increments()
      table.string('rack_name')
      table.timestamps()
    })
  }

  down () {
    this.drop('rack')
  }

}

module.exports = RackTableSchema
