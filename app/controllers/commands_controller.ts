import type { HttpContext } from '@adonisjs/core/http'
import Command from '#models/command'
import CommandItem from '#models/command_item'

export default class CommandsController {
  public async store({ request, response, auth }: HttpContext) {
    const { products } = request.only(['products'])
    try {
      console.log(auth)
      // Récupérer l'utilisateur authentifié
      //const user = await auth.authenticate()

      //console.log(user)

      const command = await Command.create({
        user: auth.user?.id,
        total_amount: products.reduce(
          (sum: number, product: { price: any; quantity: number }) =>
            sum + Number(product.price) * product.quantity,
          0
        ),
      })
      console.log(auth.check())
      await CommandItem.createMany(
        products.map((product: { productId: any; quantity: number; price: any }) => ({
          commandId: command.command_id,
          productId: product.productId,
          quantity: product.quantity,
          unitPrice: Number(product.price),
          totalPrice: Number(product.price) * product.quantity,
        }))
      )

      return response.json({
        success: true,
      })
    } catch (error) {
      console.log(error)
      return response.status(500).json({
        success: false,
        message: 'Erreur lors de la création de la commande',
        error: error.message,
      })
    }
  }
}
