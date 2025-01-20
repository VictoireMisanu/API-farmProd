import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('userId').primary()
      table.string('userName').notNullable()
      table.string('userEmail').notNullable().unique()
      table.string('userPassword').notNullable()
      table.integer('userRole').unsigned().references('role_id').inTable('roles')
      table.string('userAddress').notNullable()
      table.string('userPicture').notNullable()
      table.integer('farmId').unsigned().references('farm_id').inTable('farms').nullable()
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
