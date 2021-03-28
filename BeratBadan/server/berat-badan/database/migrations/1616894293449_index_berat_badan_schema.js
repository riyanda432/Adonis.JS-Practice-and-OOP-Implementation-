'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class IndexBeratBadanSchema extends Schema {
  up () {
    this.create('index_berat_badans', (table) => {
      table.bigIncrements("id").primary()
      table.integer('perbedaan')
      table.integer('max')
      table.integer('min')
      table.timestamp("created_at")
      table.timestamp("updated_at")
      table.timestamp("deleted_at")   
     })
  }

  down () {
    this.drop('index_berat_badans')
  }
}

module.exports = IndexBeratBadanSchema
