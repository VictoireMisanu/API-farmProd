/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import { middleware } from './kernel.js'

const ProductsController = () => import('../app/controllers/products_controller.js')
const FarmsController = () => import('../app/controllers/farms_controller.js')
const AuthController = () => import('../app/controllers/auth_controller.js')

router.get('/', [ProductsController, 'productsList'])
// router.get('/products', [ProductsController, 'productsList'])
router.get('/products', [FarmsController, 'farmsList'])
router.get('/signUp', [AuthController, 'registerAccountInfo'])
router.get('/signIn', [AuthController, 'authenticateUser'])

router.post('/signIn', [AuthController, 'authenticateUser']).use(middleware.guest())
// router.get('/auth/google/redirect', [AuthController, 'googleRedirection'])
// router.get('/auth/google/callback', [AuthController, 'googleCallback'])
