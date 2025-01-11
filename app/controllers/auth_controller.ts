import User from '#models/user'
import { HttpContext } from '@adonisjs/core/http'

export default class AuthController {
  async googleRedirection({ ally }: HttpContext) {
    ally.use('google').redirect((req) => {
      req.scopes(['user'])
    })
  }

  async googleCallback({ ally, response, session, auth }: HttpContext) {
    const google = ally.use('google')
    if (google.accessDenied()) {
      session.flash('success', 'annulé')
      return response.redirect().toRoute('authLogin')
    }
    if (google.stateMisMatch()) {
      session.flash('success', 'erreur de connexion')
      return response.redirect().toRoute('authLogin')
    }
    if (google.hasError()) {
      session.flash('success', 'Erreur de connexion')
      return response.redirect().toRoute('authLogin')
    }
    const googleUserInfo = await google.user()
    const users = await User.findBy('user_email', googleUserInfo.email)
    if (!users) {
      const newUser = await User.create({
        user_name: googleUserInfo.nickName,
        user_email: googleUserInfo.email,
      })
      await auth.use('web').login(newUser)
    }
    await auth.use('web').login(users!)
    session.flash('success', 'vous etes connecté')

    return response.redirect().toRoute('authLogin')
  }
}
