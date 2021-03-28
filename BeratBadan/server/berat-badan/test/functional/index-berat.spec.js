'use strict'

const { test, trait } = use('Test/Suite')('IndexBeratBadan')
const IndexBerat = use('App/Models/indexBeratBadan')
trait('Test/ApiClient')

test('make sure 2 + 2 is 4', async ({ assert }) => {
  assert.equal(2 + 2, 4)
})


test('get list indexBeratBadan status response 200 ', async ({ client }) => {

  const res = await IndexBerat.create({
    "min": 4,
    "max":444,
    "perbedaan":440
  })
  
  const response = await client.get('/api/v1/beratbadan/list').end()

  response.assertStatus(200)

})

test('delete status response 200 ', async ({ client }) => {

  
  
  const response = await client.delete('/api/v1/beratbadan/destroy/7').end()
  
  response.assertStatus(200)

})

test('get detail status response 200 ', async ({ client }) => {

  
  
  const response = await client.get('/api/v1/beratbadan/show/4').end()
  
  response.assertStatus(200)
})

test('create response status 200', async ({ client }) => {


  const res = await client
   .post('/api/v1/beratbadan/create')
   .send({
     "min": 4,
     "max":444
   }).end()
 
   res.assertStatus(200)
 
 })

test('edit response status 200', async ({ client }) => {


 const res = await client
  .patch('/api/v1/beratbadan/edit/11')
  .send({
    "min": 4,
    "max":444
  }).end()

  res.assertStatus(200)

})