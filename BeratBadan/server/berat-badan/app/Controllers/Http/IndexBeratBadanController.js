'use strict'

 const IndexBerat = use('App/Models/IndexBeratBadan')
 const Database   = use('Database')
 const Logger     = use('Logger')

class IndexBeratBadanController {
  
  async index ({ request, response }) {
    /** menampung data untuk limit dan skip */
    const limit = request._qs.limit ? parseInt(request._qs.limit): 5  
    const skip  = request._qs.skip  ? parseInt(request._qs.skip) : 0

    const count = await Database
                    .from('index_berat_badans')
                    .count()

    const data = await Database
                  .table('index_berat_badans')
                  .orderBy('created_at', 'desc')
                  .offset(skip)
                  .limit(limit);

    /** Menghitung data average untuk setiap column */
    const avgMax = await Database.from('index_berat_badans').avg('max')       
    const avgMin = await Database.from('index_berat_badans').avg('min')  
    const averagePerbedaan = await Database.from('index_berat_badans').avg('perbedaan')       

    /** meta data untuk informasi sukses dan pagination */
    const meta = {
      message: 'Successfully get all data',
      total: parseInt(count[0].count),
      limit: limit,
      skip: skip
    }

    const average = {
      averageMax : Math.ceil(avgMax[0].avg),
      averageMin: parseInt(avgMin[0].avg),
      averagePerbedaan: parseInt(averagePerbedaan[0].avg)
    }

    const res = {
      data: data,
      meta: meta,
      average
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
