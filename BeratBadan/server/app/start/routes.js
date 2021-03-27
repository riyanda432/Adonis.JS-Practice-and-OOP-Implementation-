'use strict'
import Route from "@ioc:Adonis/Core/Route"

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')

Route.group(() => {
    Route.group(() => {
      Route.get("list", "BeratBadanController.list")
      Route.get("detail", "BeratBadanController.detail")
      Route.post("add", "BeratBadanController.add")
      Route.put("update", "BeratBadanController.edit")
      Route.delete("delete", "BeratBadanController.delete")
    }).prefix("berat-badan")
}).prefix("app/v1")
