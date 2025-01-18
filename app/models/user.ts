import { DateTime } from 'luxon'
import hash from '@adonisjs/core/services/hash'
import { compose } from '@adonisjs/core/helpers'
import { BaseModel, column } from '@adonisjs/lucid/orm'
import { withAuthFinder } from '@adonisjs/auth/mixins/lucid'

const AuthFinder = withAuthFinder(() => hash.use('scrypt'), {
  uids: ['email', 'username', 'password'],
  passwordColumnName: 'user_password',
})

export default class User extends compose(BaseModel, AuthFinder) {
  @column({ isPrimary: true, serializeAs: null })
  declare userId: number

  @column()
  declare userName: string

  @column()
  declare userEmail: string

  @column()
  declare userPassword: string

  @column()
  declare userRole: number

  @column()
  declare userAddress: string

  @column()
  declare userPicture: string

  @column()
  declare farmId: number | null

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
