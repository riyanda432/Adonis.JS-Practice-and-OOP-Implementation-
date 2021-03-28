'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Indexberat extends Model {
    up () {
        this.create('indexberat', (table) => {
            table.bigIncrements("id").primary()
            table.integer('perbedaan')
            table.integer('max')
            table.integer('min')
            table.timestamp("created_at").defaultTo(this.now()).notNullable()
            table.timestamp("updated_at")
            table.timestamp("deleted_at")
        })
    }
}

module.exports = Indexberat
