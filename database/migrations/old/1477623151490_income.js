'use strict'

const Schema = use('Schema')

class IncomeTableSchema extends Schema {

  up () {
    this.create('income', (table) => {
      table.increments()
      table.integer('transaction_id', 5).references('id').inTable('transaction')
      table.integer('total')
      table.timestamps()
    })
  }

  down () {
    this.drop('income')
  }

}

module.exports = IncomeTableSchema
