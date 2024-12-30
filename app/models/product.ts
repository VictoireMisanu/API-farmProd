import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Product extends BaseModel {
  @column({ isPrimary: true })
  declare product_id: number

  @column()
  declare product_name: string

  @column()
  declare product_descript: string

  @column()
  declare birth_date: Date

  @column()
  declare life_duration: number

  @column()
  declare category: number

  @column()
  declare farm: number

  @column()
  declare product_image: string

  @column()
  declare price: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
