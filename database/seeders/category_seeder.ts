import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Category from '../../app/models/category.js'
import { DateTime } from 'luxon'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method
    await Category.createMany([
      {
        category_designation: 'Grand bétail',

        createdAt: DateTime.now(),
        updatedAt: DateTime.now(),
      },
      {
        category_designation: 'Petit bétail',

        createdAt: DateTime.now(),
        updatedAt: DateTime.now(),
      },
      {
        category_designation: 'Volaille',

        createdAt: DateTime.now(),
        updatedAt: DateTime.now(),
      },
    ])
  }
}
