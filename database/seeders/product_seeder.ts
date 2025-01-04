import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Product from '../../app/models/product.js'
// import { faker } from '@faker-js/faker'
import { DateTime } from 'luxon'

export default class ProductSeeder extends BaseSeeder {
  public async run() {
    await Product.createMany([
      {
        product_name: 'Mouton',
        product_descript: 'Mouton poilu',
        birth_date: new Date('2024-12-30'),
        life_duration: 15,
        product_image:
          'https://res.cloudinary.com/ddwgsvzlw/image/upload/v1735053667/groupMouton_lm1kgf.jpg',
        price: 200,
        farm: 1,
        category: 1,
        createdAt: DateTime.now(),
        updatedAt: DateTime.now(),
      },
      {
        product_name: 'Porc',
        product_descript: 'Porc graisseux tacheté',
        birth_date: new Date('2024-12-30'),
        life_duration: 15,
        product_image:
          'https://res.cloudinary.com/ddwgsvzlw/image/upload/v1735053424/pig_bhpjcl.jpg',
        price: 200,
        farm: 1,
        category: 1,
        createdAt: DateTime.now(),
        updatedAt: DateTime.now(),
      },
      {
        product_name: 'Vache',
        product_descript: 'Vache laitière',
        birth_date: new Date('2024-12-30'),
        life_duration: 15,
        product_image:
          'https://res.cloudinary.com/ddwgsvzlw/image/upload/v1735210671/laVache_fdvv9h.jpg',
        price: 200,
        farm: 1,
        category: 1,
        createdAt: DateTime.now(),
        updatedAt: DateTime.now(),
      },
      {
        product_name: 'Chèvre',
        product_descript: 'Chèvre à sabots',
        birth_date: new Date('2024-12-30'),
        life_duration: 15,
        product_image:
          'https://res.cloudinary.com/ddwgsvzlw/image/upload/v1735053075/Goat_pgbaz1.jpg',
        price: 20,
        farm: 1,
        category: 1,
        createdAt: DateTime.now(),
        updatedAt: DateTime.now(),
      },
      {
        product_name: 'Lapin',
        product_descript: 'Lapin malin',
        birth_date: new Date('2024-12-30'),
        life_duration: 15,
        product_image:
          'https://res.cloudinary.com/ddwgsvzlw/image/upload/v1734886308/twoLapin_xcxvwm.jpg',
        price: 20,
        farm: 2,
        category: 2,
        createdAt: DateTime.now(),
        updatedAt: DateTime.now(),
      },
      {
        product_name: 'Cobaye',
        product_descript: 'Cobaye à poils lisses',
        birth_date: new Date('2024-12-30'),
        life_duration: 15,
        product_image:
          'https://res.cloudinary.com/ddwgsvzlw/image/upload/v1735054490/Cobaye4_ilgcbu.jpg',
        price: 20,
        farm: 2,
        category: 2,
        createdAt: DateTime.now(),
        updatedAt: DateTime.now(),
      },
      {
        product_name: 'Cobaye',
        product_descript: 'Cobaye à poils longs',
        birth_date: new Date('2024-12-30'),
        life_duration: 15,
        product_image:
          'https://res.cloudinary.com/ddwgsvzlw/image/upload/v1735054700/cobaye1_zgdnik.jpg',
        price: 20,
        farm: 2,
        category: 2,
        createdAt: DateTime.now(),
        updatedAt: DateTime.now(),
      },
      {
        product_name: 'Pigeon',
        product_descript: 'Pigeon domestique',
        birth_date: new Date('2024-12-30'),
        life_duration: 15,
        product_image:
          'https://res.cloudinary.com/ddwgsvzlw/image/upload/v1735211090/pigeon_hv9tos.jpg',
        price: 20,
        farm: 3,
        category: 3,
        createdAt: DateTime.now(),
        updatedAt: DateTime.now(),
      },
      {
        product_name: 'Dindon',
        product_descript: 'Dindon rouge',
        birth_date: new Date('2024-12-30'),
        life_duration: 15,
        product_image:
          'https://res.cloudinary.com/ddwgsvzlw/image/upload/v1735054489/Dindon1_xxqmc4.jpg',
        price: 20,
        farm: 3,
        category: 3,
        createdAt: DateTime.now(),
        updatedAt: DateTime.now(),
      },
      {
        product_name: 'Poule de ferme',
        product_descript: 'Poule de ferme',
        birth_date: new Date('2024-12-30'),
        life_duration: 15,
        product_image:
          'https://res.cloudinary.com/ddwgsvzlw/image/upload/v1735054490/pondeuse1_mmb9cb.jpg',
        price: 20,
        farm: 3,
        category: 3,
        createdAt: DateTime.now(),
        updatedAt: DateTime.now(),
      },
      {
        product_name: 'Canard',
        product_descript: 'Canards vagabonds',
        birth_date: new Date('2024-12-30'),
        life_duration: 15,
        product_image:
          'https://res.cloudinary.com/ddwgsvzlw/image/upload/v1735054489/Canard1_ed7ag6.jpg',
        price: 20,
        farm: 3,
        category: 3,
        createdAt: DateTime.now(),
        updatedAt: DateTime.now(),
      },
    ])
  }
}
