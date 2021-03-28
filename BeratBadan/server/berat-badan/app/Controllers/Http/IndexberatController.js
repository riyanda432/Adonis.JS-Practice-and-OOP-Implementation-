'use strict'
const IndexBerat = use('App/Models/Indexberat')

class IndexberatController {
        async index ({ request, response }) {
                const Indexberat = await IndexBerat.all()
                console.log('gfg')
                return Indexberat
          
        }

        async store ({ request, response }) {
            try {
                // getting data passed within the request
                const data = request.only(['perbedaan', 'min', 'max'])
          
                // looking for user in database
                // const userExists = await User.findBy('id', data.id)
          
                // // if user exists don't save
                // if (userExists) {
                //   return response
                //     .status(400)
                //     .send({ message: { error: 'User already registered' } })
                // }
          
                // if user doesn't exist, proceeds with saving him in DB
                const user = await User.create(data)
          
                return user
              } catch (err) {
                return response
                  .status(err.status)
                  .send(err)
              }
        }
}

module.exports = IndexberatController
