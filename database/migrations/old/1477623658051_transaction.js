'use strict'

const Schema = use('Schema')

class TransactionTableSchema extends Schema {

  up () {
    this.create('transaction', (table) => {
      table.increments()
      table.integer('book_id', 5).unsigned().references('id').inTable('books')
      table.integer('member_id', 5).unsigned().references('id').inTable('member')
      table.date('borrow_date')
      table.date('return_date')
      table.enu('active', ['0', '1'])
      table.timestamps()
    })
  }

  down () {
    this.drop('transaction')
  }

}

module.exports = TransactionTableSchema
