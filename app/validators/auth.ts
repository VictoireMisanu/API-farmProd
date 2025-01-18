import vine from '@vinejs/vine'

export const createAccountValidator = vine.compile(
  vine.object({
    userPicture: vine.string().maxLength(255),
    userPassword: vine.string().maxLength(255),
    userName: vine.string().trim().maxLength(50),

    userEmail: vine.string().unique(async (db, value) => {
      const email = await db.from('users').where('email', value).first()
      return !email
    }),
  })
)
