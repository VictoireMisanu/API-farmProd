import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'

export default class UsersController {
  public async usersList(ctx: HttpContext) {
    try {
      const users = await User.all()

      return ctx.response.status(200).json(users)
    } catch (error) {
      return ctx.response.status(500).json({
        message: "Erreur lors de l'affichage des users et des users",
        error: error.message,
      })
    }
  }
}
