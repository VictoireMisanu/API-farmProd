import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'

import Command from './command.js'
import Product from './product.js'
export default class CommandItem extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare command_id: number

  @column()
  declare product_id: number

  @column()
  declare unit_price: number

  @column()
  declare total_price: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(() => Command)
  public order!: BelongsTo<typeof Command>

  @belongsTo(() => Product)
  public product!: BelongsTo<typeof Product>
}
