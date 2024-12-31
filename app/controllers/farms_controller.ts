import type { HttpContext } from '@adonisjs/core/http'
import Farm from '#models/farm'

export default class FarmsController {

    public async farmsList(ctx: HttpContext) {
        try {
          const farms = await Farm.all()
          return ctx.response.status(200).json(farms)
        } catch (error) {
          return ctx.response.status(500).json({
            message: "Erreur lors de l'affichage des fermiers",
            error: error.message,
          })
        }
      }
}