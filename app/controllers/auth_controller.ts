import User from '#models/user'
import { HttpContext } from '@adonisjs/core/http'
import { createAccountValidator } from '../validators/auth.js'
import hash from '@adonisjs/core/services/hash'

export default class AuthController {
  async registerAccountInfo({ request, response }: HttpContext) {
    try {
      const { userPicture, userName, userEmail, userPassword } =
        await request.validateUsing(createAccountValidator)

      await User.create({ userPicture, userName, userEmail, userPassword })

      return response.status(201).json({
        message: 'Compte créé avec succès',
      })
    } catch (error) {
      return response.status(400).json({
        error: 'Erreur lors de la création du compte',
      })
    }
  }

  async authenticateUser({ request, response, session, auth }: HttpContext) {
    // const { email, password } = request.only(['email', 'password'])
    /**
     * Find a user by email. Return error if a user does
     * not exists
     */
    // let user = await User.findBy('email', email)
    // if (!user) {
    //   response.flash('Invalid credentials')
    // }
    try {
      const { userEmail, userPassword } = request.only(['userEmail', 'userPassword'])
      const user = await User.findBy('email', userEmail)

      if (!user) {
        response.abort('Invalid credentials')
      } else {
        await hash.verify(userPassword, userPassword)
        await auth.use('web').login(user)
        session.flash('success', 'Connexion reussie')
        return response.redirect('/home')
      }
      // const client = await User.verifyCredentials(email, code)
    } catch (error) {
      console.error(error)
      session.flash('error', "Le nom ou le code d'accès est incorrect")
      return response.redirect().back()
    }

    /**
     * Verify the password using the hash service
     */
    // await hash.verify(password, password)
    // user = await User.verifyCredentials(email, password)
    // console.log('is authenticated')
    // return response.redirect('/home')
  }
  // async googleRedirection({ ally }: HttpContext) {
  //   ally.use('google').redirect((req) => {
  //     req.scopes(['user'])
  //   })
  // }

  // async googleCallback({ ally, response, session, auth }: HttpContext) {
  //   const google = ally.use('google')
  //   try {
  //     if (google.accessDenied()) {
  //       //   session.flash('success', 'annulé')
  //       return response.redirect('https://votre-frontend-url.com/login?error=access_denied')
  //     }
  //     if (google.stateMisMatch()) {
  //       //   session.flash('success', 'erreur de connexion')
  //       return response.redirect('https://votre-frontend-url.com/login?error=state_mismatch')
  //     }
  //     if (google.hasError()) {
  //       //   session.flash('success', 'Erreur de connexion')
  //       return response.redirect('https://votre-frontend-url.com/login?error=google_error')
  //     }
  //     const googleUserInfo = await google.user()
  //     let user = await User.findBy('user_email', googleUserInfo.email)
  //     if (!user) {
  //       user = await User.create({
  //         user_name: googleUserInfo.name || googleUserInfo.nickName,
  //         user_email: googleUserInfo.email,
  //       })
  //     }
  //     await auth.use('web').login(user!)
  //     session.flash('success', 'vous etes connecté')
  //     // D'abord, générer le token

  //     //   const apiToken = await auth.use('web').attempt(email, password)

  //     //   // Ensuite, utiliser le token dans la redirection
  //     //   return response.redirect(`http://localhost:5173/auth/callback?token=${apiToken.token}`)

  //     //   return response.redirect(`http://localhost:5173/auth/callback?token=${token.token}`)
  //   } catch (error) {
  //     return response.redirect('http://localhost:5173/login?error=server_error')
  //   }
  // }
}
