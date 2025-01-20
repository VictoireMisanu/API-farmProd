import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Role from '../../app/models/role.js'
import { DateTime } from 'luxon'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method
    await Role.createMany([
      {
        role_designation: 'Membre',

        createdAt: DateTime.now(),
        updatedAt: DateTime.now(),
      },
      {
        role_designation: 'Admin',

        createdAt: DateTime.now(),
        updatedAt: DateTime.now(),
      },
    ])
  }
}
