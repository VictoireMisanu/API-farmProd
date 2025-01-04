import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Farm from '../../app/models/farm.js'
import { DateTime } from 'luxon'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method

    const farm = await Farm.create({
      enterprise_name: 'Afia Ndjema',
      enterprise_location: 'Kinshasa Nsele',
      work_field: 'Elevage grand bétail',
      farm_image: 'https://res.cloudinary.com/ddwgsvzlw/image/upload/v1735812648/bee_gpwvvd.png',

      createdAt: DateTime.now(),
      updatedAt: DateTime.now(),
    })

    await farm.save()
  }
}
