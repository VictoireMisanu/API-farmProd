import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'command_items'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table
        .integer('command_id')
        .unsigned()
        .references('id')
        .inTable('commands')
        .onDelete('CASCADE')
      table
        .integer('product_id')
        .unsigned()
        .references('product_id')
        .inTable('products')
        .onDelete('RESTRICT')
<<<<<<< HEAD:database/migrations/1740375312056_create_command_items_table.ts
      table.integer('quantity').notNullable().checkPositive()
=======
      // table.integer('quantity').notNullable().checkPositive()
>>>>>>> 1e95e56cacb8ce49bff8ba015628c07c22017c4d:database/migrations/1740375312056_create_command_details_table.ts
      // table.decimal('unit_price', 10, 2).notNullable()
      // table.decimal('total_price', 10, 2).notNullable()
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
