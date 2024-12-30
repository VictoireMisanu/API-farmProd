import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('user_id').primary()
      table.string('user_name').notNullable()
      table.string('user_mailAddress').notNullable().unique()
      table.string('user_passWord').notNullable()
      table.integer('user_role').unsigned().references('role_id').inTable('roles')
      table.string('user_address').notNullable()
      table.string('user_picture').notNullable()
      table.integer('farm_id').unsigned().references('farm_id').inTable('farms').nullable()
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
