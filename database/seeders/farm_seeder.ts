import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Farm from '../../app/models/farm.js'
import { DateTime } from 'luxon'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method

    await Farm.createMany([
      {
        enterprise_name: 'Ku Dia Bilenga',
        enterprise_location: 'Kasaï cental',
        work_field: 'Elevage grand bétail',
        farm_image: 'https://res.cloudinary.com/ddwgsvzlw/image/upload/v1735812648/bee_gpwvvd.png',

        createdAt: DateTime.now(),
        updatedAt: DateTime.now(),
      },
      {
        enterprise_name: 'Ku Dia Bilenga',
        enterprise_location: 'Kasaï cental',
        work_field: 'Elevage petit bétail',
        farm_image: 'https://res.cloudinary.com/ddwgsvzlw/image/upload/v1735812648/bee_gpwvvd.png',

        createdAt: DateTime.now(),
        updatedAt: DateTime.now(),
      },
      {
        enterprise_name: 'Ku Dia Mbote',
        enterprise_location: 'Kikwit Sud',
        work_field: 'Elevage volaille',
        farm_image: 'https://res.cloudinary.com/ddwgsvzlw/image/upload/v1735812648/bee_gpwvvd.png',

        createdAt: DateTime.now(),
        updatedAt: DateTime.now(),
      },
    ])
  }
}
