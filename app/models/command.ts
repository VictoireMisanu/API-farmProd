import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Command extends BaseModel {
  @column({ isPrimary: true })
  declare command_id: number

  @column()
  declare command_date: Date

  @column()
  declare global_price: string

  @column()
  declare quantity: number

  @column()
  declare command_num: string

  @column()
  declare user: number

  @column()
  declare product: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
