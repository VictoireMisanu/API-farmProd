/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

const ProductsController = () => import('../app/controllers/products_controller.js')
const FarmsController = () => import('../app/controllers/farms_controller.js')
const AuthController = () => import('../app/controllers/auth_controller.js')

router.get('/', [ProductsController, 'productsList'])
// router.get('/products', [ProductsController, 'productsList'])
router.get('/products', [FarmsController, 'farmsList'])
router.get('/authLogin', [AuthController, 'authenticateUser'])
