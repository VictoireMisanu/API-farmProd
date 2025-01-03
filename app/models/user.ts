import { DateTime } from 'luxon'
// import hash from '@adonisjs/core/services/hash'
// import { compose } from '@adonisjs/core/helpers'
import { BaseModel, column } from '@adonisjs/lucid/orm'
// import { withAuthFinder } from '@adonisjs/auth/mixins/lucid'

// const AuthFinder = withAuthFinder(() => hash.use('scrypt'), {
//   uids: ['email'],
//   passwordColumnName: 'password',
// })

export default class User extends BaseModel {
  @column({ isPrimary: true })
  declare user_id: number

  @column()
  declare user_name: string

  @column()
  declare user_mailAddress: string

  @column()
  declare user_passWord: string

  @column()
  declare user_role: string

  @column()
  declare user_address: string

  @column()
  declare farm_id: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
