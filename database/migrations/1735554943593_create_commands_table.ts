import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'commands'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('command_id').primary()
      table.date('command_date').notNullable()
      table.decimal('global_price', 10, 2).notNullable()
      table.integer('quantity').notNullable()
      table.integer('user').unsigned().references('id').inTable('users')
      table.integer('product').unsigned().references('product_id').inTable('products')
      table.string('command_num').notNullable()
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
