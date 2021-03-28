'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.group(() => {

  Route.get("list", 'IndexBeratBadanController.index')
  Route.post("create", 'IndexBeratBadanController.create')
  Route.get("show/:id", 'IndexBeratBadanController.show')
  Route.patch("edit/:id", 'IndexBeratBadanController.edit')
  Route.delete("destroy/:id", 'IndexBeratBadanController.destroy')

}).prefix("api/v1/beratbadan")