'use strict'

const Schema = use('Schema')

class IncomeTableSchema extends Schema {

  up () {
    this.create('income', (table) => {
      table.increments('id_income')
      table.integer('transaction_id', 5).unsigned().references('id_transaction').inTable('transaction').onDelete('CASCADE')
      table.integer('total')
      table.timestamps()
    })
  }

  down () {
    this.drop('income')
  }

}

module.exports = IncomeTableSchema
