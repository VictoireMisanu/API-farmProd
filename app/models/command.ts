import { DateTime } from 'luxon'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'

import CommandItem from './command_item.js'
import type { HasMany } from '@adonisjs/lucid/types/relations'

export default class Command extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  // @column()
  // declare order_number: string

  @column()
  declare totalAmount: number

  @column()
  declare status: string

  @column()
  declare userId: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @hasMany(() => CommandItem)
  public items!: HasMany<typeof CommandItem>

  // @beforeCreate()
  // public static async generateOrderNumber(command: Command) {
  //   const date = new Date()
  //   const year = date.getFullYear()
  //   const month = String(date.getMonth() + 1).padStart(2, '0')
  //   const day = String(date.getDate()).padStart(2, '0')
  //   const random = Math.floor(Math.random() * 10000)
  //     .toString()
  //     .padStart(4, '0')

  //   command.order_number = `CMD-${year}${month}${day}-${random}`
  // }
}
