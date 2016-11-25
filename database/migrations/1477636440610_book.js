'use strict'

const Schema = use('Schema')

class BookTableSchema extends Schema {

  up () {
    this.create('book', (table) => {
      table.increments('id_book')
      table.string('uid_book', 25).unique()
      table.string('title', 50)
      table.string('author', 50)
      table.string('publisher', 50)
      table.string('isbn', 30)
      table.date('year')
      table.integer('stock', 2)
      table.integer('rack_id', 2).unsigned().references('id_rack').inTable('rack').onDelete('CASCADE')
      table.integer('category_id', 2).unsigned().references('id_category').inTable('category').onDelete('CASCADE')
      table.timestamps()
    })
  }

  down () {
    this.drop('book')
  }

}

module.exports = BookTableSchema
