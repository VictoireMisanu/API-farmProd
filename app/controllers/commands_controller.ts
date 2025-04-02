import type { HttpContext } from '@adonisjs/core/http'
import Command from '#models/command'
import CommandItem from '#models/command_item'
import User from '#models/user'

export default class CommandsController {
  public async store({ request }: HttpContext) {


    const { commands } = request.all()
    let globalPrice = 0

    for (let i = 0; i < commands.length; i++) {
      console.log(commands[i].global_price);

      globalPrice += Number(commands[i].global_price);


      // const generateCommandNumber = () => {
      //   const timestamp = Date.now()
      //   const random = Math.floor(Math.random() * 1000)
      //   return `CMD-${timestamp}-${random}` // Ex: CMD-1711801234567-423
      // }

      // console.log(command);
    }
    const command = await Command.create({
      userId: 1,
      totalAmount: globalPrice,
      // order_number: generateCommandNumber(),
    })

    for (let i = 0; i < commands.length; i++) {
       await CommandItem.create({
        quantity: commands[i].quantity,
        commandId: command.id,
        productId: commands[i].product
      })
    }

    // console.log('Données récupérées:', commands);

    // const { command_date, global_price, quantity, user, product } = request.all()
    // console.log({ command_date, global_price, quantity, user, product });

    //   console.log(products.productId);

    //   try {
    //     console.log(auth)
    //     // Récupérer l'utilisateur authentifié
    //     //const user = await auth.authenticate()

    //     //console.log(user)

    //     const command = await Command.create({
    //       user: auth.user?.id,
    //       total_amount: products.reduce(
    //         (sum: number, product: { price: any; quantity: number }) =>
    //           sum + Number(product.price) * product.quantity,
    //         0
    //       ),
    //     })
    //     await CommandItem.createMany(
    //       products.map((product: { productId: any; quantity: number; price: any }) => ({
    //         commandId: command.command_id,
    //         productId: product.productId,
    //         quantity: product.quantity,
    //         unitPrice: Number(product.price),
    //         totalPrice: Number(product.price) * product.quantity,
    //       }))
    //     )

    //     console.log(response.json);

    //     return response.json({
    //       success: true,
    //     })
    //   } catch (error) {
    //     console.log(error)
    //     return response.status(500).json({
    //       success: false,
    //       message: 'Erreur lors de la création de la commande',
    //       error: error.message,
    //     })
    //   }
  }
  public async get({ response }: HttpContext) {
    const command = await Command.all()

    return response.json(command)
  }

  public async getItem({ response}: HttpContext) {
    const commandItem = await User.all()

    return response.json(commandItem)
  }
}
