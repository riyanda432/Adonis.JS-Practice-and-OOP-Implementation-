'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class IndexBeratBadan extends Model {
    up () {
        this.create('index_berat_badans', (table) => {
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

module.exports = IndexBeratBadan
