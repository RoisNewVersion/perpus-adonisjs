'use strict'

const Schema = use('Schema')

class FineTableSchema extends Schema {

  up () {
    this.create('fine', (table) => {
      table.increments()
      table.integer('nominal', 5)
      table.timestamps()
    })
  }

  down () {
    this.drop('fine')
  }

}

module.exports = FineTableSchema
