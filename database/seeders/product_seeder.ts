import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Product from '../../app/models/product.js'
// import { faker } from '@faker-js/faker'
import { DateTime } from 'luxon'

export default class ProductSeeder extends BaseSeeder {
  public async run() {
    const product = await Product.create({
      product_name: 'Lapin',
      product_descript: 'Lapin malin',
      birth_date: new Date('2024-12-30'),
      life_duration: 15,
      product_image:
        'https://res.cloudinary.com/ddwgsvzlw/image/upload/v1734886308/twoLapin_xcxvwm.jpg',
      price: 20,
      farm: 1,
      category: 1,
      createdAt: DateTime.now(),
      updatedAt: DateTime.now(),
    })

    await product.save()
  }
}
