'use strict'

const Schema = use('Schema')

class BooksTableSchema extends Schema {

  up () {
    this.create('books', (table) => {
      table.increments()
      table.string('uid_book', 25)
      table.string('title', 50)
      table.string('author', 50)
      table.string('publisher', 50)
      table.string('isbn', 30)
      table.date('year')
      table.integer('stock', 2)
      table.integer('rack_id', 2).references('id').inTable('rack')
      table.integer('category_id', 2).references('id').inTable('category')
      table.timestamps()
    })
  }

  down () {
    this.drop('books')
  }

}

module.exports = BooksTableSchema
