import type { HttpContext } from '@adonisjs/core/http'
import Product from '#models/product'

export default class ProductsController {

    public async index(ctx: HttpContext) {
        try {
          const products = await Product.all()
          return ctx.response.status(200).json(products)
        } catch (error) {
          return ctx.response.status(500).json({
            message: 'Erreur lors de la récupération des produits',
            error: error.message,
          })
        }
      }
}