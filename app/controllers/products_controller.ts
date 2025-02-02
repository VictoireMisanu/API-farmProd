import type { HttpContext } from '@adonisjs/core/http'
import Product from '#models/product'

export default class ProductsController {
  public async productsList(ctx: HttpContext) {
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

  public async productDetail(ctx: HttpContext) {
    try {
      const product = await Product.find(ctx.params.id)
      return ctx.response.status(200).json(product)
    } catch (error) {
      return ctx.response.status(500).json({
        message: 'Erreur lors de la récupération du produit',
        error: error.message,
      })
    }
  }
}
