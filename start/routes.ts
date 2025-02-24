/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

// import { Route } from '@adonisjs/core/http'
// import auth from '@adonisjs/auth/middleware/auth'
import router from '@adonisjs/core/services/router'

const ProductsController = () => import('../app/controllers/products_controller.js')
const FarmsController = () => import('../app/controllers/farms_controller.js')
const AuthController = () => import('../app/controllers/auth_controller.js')
const CommandsController = () => import('../app/controllers/commands_controller.js')

router.get('/', [ProductsController, 'productsList'])
// router.get('/products', [ProductsController, 'productsList'])
router.get('/products', [FarmsController, 'farmsList'])
router.post('/signin', [AuthController, 'authenticateUser'])
router.post('/signup', [AuthController, 'registerAccountInfo'])
router.get('/products/:id', [ProductsController, 'productDetail'])
router.post('/command', [CommandsController, 'store'])

// router
// router
//   .group(() => {
//     router.post('/commands', [CommandsController, 'store'])
//     router.get('/commands', [CommandsController, 'index'])
//     router.get('/commands/:id', [CommandsController, 'show'])

//   })
//   .prefix('api')
