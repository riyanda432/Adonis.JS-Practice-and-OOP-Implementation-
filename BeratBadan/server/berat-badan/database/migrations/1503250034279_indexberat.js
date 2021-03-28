'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class Indexberat extends Schema {
  up () {
    this.create('indexberat', (table) => {
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
    this.drop('indexberat')
  }
}

module.exports = Indexberat
