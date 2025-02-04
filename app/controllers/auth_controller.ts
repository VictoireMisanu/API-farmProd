import User from '#models/user'
import { HttpContext } from '@adonisjs/core/http'
import { createAccountValidator, loginValidator } from '../validators/auth.js'
import hash from '@adonisjs/core/services/hash'

export default class AuthController {
  async registerAccountInfo({ request, response }: HttpContext) {
    try {
      console.log(request.body()?.user_picture)

      const { user_picture, user_name, user_email, user_password, user_address } =
        await request.validateUsing(createAccountValidator)
      //await request.validateUsing(createAccountValidator)
      console.log(user_picture, user_name, user_email, user_password)
      // const hashedPassword = await bcrypt.hash(user_password, 10)
      // Save the user with the hashed password
      await User.create({
        user_picture,
        user_name,
        user_email,
        user_password,
        user_address,
      })

      return response.status(201).json({
        userInfo: { user_picture, user_name, user_email, user_address },
      })
    } catch (error) {
      console.log(error)
      return response.status(500).json({
        message: "Une erreur est survenue lors de la création de l'utilisateur.",
        error: error.message,
      })
    }
  }

  async authenticateUser({ request, response }: HttpContext) {
    try {
      const { email, password } = await request.validateUsing(loginValidator)
      console.log(email, password)
      const user = await User.findBy('user_email', email)
      if (!user) {
        return response.status(401).json({ message: 'Identifiants invalides' })
      }
      const passwordValid = await hash.verify(user.user_password, password)
      console.log(user.user_password)
      if (!passwordValid) {
        return response.status(401).json({ message: 'Identifiants invalides' })
      }

      const token = await User.accessTokens.create(user)
      return response.status(200).json({
        token,
        userInfo: {
          user_picture: user.user_picture,
          user_name: user.user_name,
          user_email: user.user_email,
          user_address: user.user_address,
        },
      })
    } catch (error) {
      console.error(error)
      return response.status(500).json({
        message: "Une erreur est survenue lors de l'authentification.",
        error: error.message,
      })
    }
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
