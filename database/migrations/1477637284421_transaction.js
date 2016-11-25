'use strict'

const Schema = use('Schema')

class TransactionTableSchema extends Schema {

  up () {
    this.create('transaction', (table) => {
      table.increments('id_transaction')
      table.integer('book_id', 5).unsigned().references('id_book').inTable('book').onDelete('CASCADE')
      table.integer('member_id', 5).unsigned().references('id_member').inTable('member').onDelete('CASCADE')
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
