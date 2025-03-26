// import type { HttpContext } from '@adonisjs/core/http'

import { HttpContext } from '@adonisjs/core/http'

export default class UserConnectedController {
  // Fonction pour récupérer l'utilisateur authentifié
  public async getUser({ auth, response }: HttpContext) {
    try {
      // Vérifier si l'utilisateur est authentifié
      if (!auth.user) {
        return response.status(401).json({
          success: false,
          message: 'Utilisateur non authentifié',
        })
      }

      // Retourner les informations de l'utilisateur
      return response.json({
        success: true,
        message: 'Utilisateur connecté',
        user: auth.user, // Retourne l'utilisateur connecté
      })
    } catch (error) {
      console.error("Erreur lors de la récupération de l'utilisateur:", error)
      return response.status(500).json({
        success: false,
        message: "Erreur lors de la récupération de l'utilisateur",
        error: error.message,
      })
    }
  }
}
