import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Farm extends BaseModel {
  @column({ isPrimary: true })
  declare farm_id: number

  @column()
  declare enterprise_name: string

  @column()
  declare enterprise_location: string

  @column()
  declare work_field: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
