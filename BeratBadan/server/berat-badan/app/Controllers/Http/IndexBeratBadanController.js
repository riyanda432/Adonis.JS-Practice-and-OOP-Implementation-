'use strict'


 const IndexBerat = use('App/Models/IndexBeratBadan')
 const Database = use('Database')
 const Logger = use('Logger')


class IndexBeratBadanController {
  /**
   * Show a list of all indexberatbadans.
   * GET indexberatbadans
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */

  async index ({ request, response, view }) {

    const data = await IndexBerat.all();
    const meta = {
      message: 'Successfully get all data'
    }

    const res = {
      data: data,
      meta: meta
    }

    return res;
  }

  async create ({ request, response }) {
    try {
      const min = request.body.min
      const max = request.body.max

      request.body.perbedaan = max - min
      const data = await IndexBerat.create(request.body)
      
      const res = {
        message: 'Successfully Insert Data !',
        data: data
      }

      return res
    } catch (err) {
      return response
        .status(err.status)
        .send(err)
    }
  }
  
  async show ({ params, request, response, view }) {
    const id = params.id;
    const data = await Database.from('index_berat_badans').where('id', id)

    const res = data ?  
      {
        message: "Successfully Get Detail Data !",
        data: data
      } : Logger.error('Something wrong when get detail data')

    return res
  }

  async edit ({ params, request, response, view }) {
    const id = params.id;
    
    const affectedRows = await Database
      .table('index_berat_badans')
      .where('id', id)
      .update(request.body)
    
    const res = affectedRows === 1 ?  
      {
        message: "Successfully Edit Data",
        data: request.body
      } : Logger.error('Something wrong when edit data')

    return res
  }

  async update ({ params, request, response }) {
  }

  async destroy ({ params, request, response }) {
    const id = params.id;

    const affectedRows = await Database
    .table('index_berat_badans')
    .where('id', id)
    .delete()

    const res = affectedRows === 1 ?  
      {
        message: "Successfully Delete Data",
      } : Logger.error('Something wrong when delete data')

    return res
  }
}

module.exports = IndexBeratBadanController
