import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'products'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('product_id').primary()
      table.string('product_name').notNullable()
      table.string('product_descript').notNullable()
      table.date('birth_date').notNullable()
      table.integer('life_duration').notNullable()
      table.integer('category').unsigned().references('category_id').inTable('categories')
      table.integer('farm').unsigned().references('farm_id').inTable('farms')
      table.string('product_image').notNullable()
      table.decimal('price', 10, 2).notNullable()
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
