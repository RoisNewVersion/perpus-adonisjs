'use strict'

const Schema = use('Schema')

class CategoryTableSchema extends Schema {

  up () {
    this.create('category', (table) => {
      table.increments('id_category')
      table.string('category_name', 35)
      table.timestamps()
    })
  }

  down () {
    this.drop('category')
  }

}

module.exports = CategoryTableSchema
