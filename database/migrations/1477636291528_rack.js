'use strict'

const Schema = use('Schema')

class RackTableSchema extends Schema {

  up () {
    this.create('rack', (table) => {
      table.increments('id_rack')
      table.string('rack_name', 20)
      table.timestamps()
    })
  }

  down () {
    this.drop('rack')
  }

}

module.exports = RackTableSchema
