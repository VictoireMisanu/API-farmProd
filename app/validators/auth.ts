import vine from '@vinejs/vine'

const password = vine.string().minLength(8)

export const createAccountValidator = vine.compile(
  vine.object({
    user_password: vine.string().maxLength(255),
    username: vine.string().trim().maxLength(50),

    userEmail: vine.string().unique(async (db, value) => {
      const email = await db.from('users').where('userEmail', value).first()
      return !email
    }),
  })
)

export const loginValidator = vine.compile(
  vine.object({
    email: vine.string().email().normalizeEmail(),
    password,
  })
)
