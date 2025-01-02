import { BaseSeeder } from '@adonisjs/lucid/seeders'
// import Farm from '../../app/models/farm.js'
// import Category from '../../app/models/category.js'
import Product from '../../app/models/product.js'
// import { faker } from '@faker-js/faker'
import { DateTime } from 'luxon'

export default class ProductSeeder extends BaseSeeder {
  public async run() {

    const product = await Product.create({
      product_name: 'Lapin',
      product_descript:"Lapin malin",
      birth_date:new Date('2024-12-30'),
      life_duration:15,
      product_image:'https://res.cloudinary.com/ddwgsvzlw/image/upload/v1734886308/twoLapin_xcxvwm.jpg',
      price:20,
      farm:3,
      category:3,
       createdAt: DateTime.now(),
       updatedAt: DateTime.now() })

    // const category = await Category.create({
    //   category_designation: 'Volaille',
    //    createdAt: DateTime.now(),
    //    updatedAt: DateTime.now() },)
  
    await product.save()
  }
}

// export default class ProductSeeder extends BaseSeeder {
//   public async run() {

// const users = [
//   {
//     username: 'user1',
//     email: 'user1@example.com',
//     password: 'password1',
//     createdAt: DateTime.now(),
//     updatedAt: DateTime.now(),
//   },
//   {
//     username: 'user2',
//     email: 'user2@example.com',
//     password: 'password2',
//     createdAt: DateTime.now(),
//     updatedAt: DateTime.now(),
//   },
//   {
//     username: 'user3',
//     email: 'user3@example.com',
//     password: 'password3',
//     createdAt: DateTime.now(),
//     updatedAt: DateTime.now(),
//   },
//   // Ajoutez d'autres utilisateurs ici
// ];

// for (const userData of users) {
//   await User.create(userData);
// }
//     const products = [
//       {
//         product_name: 'Dindon',
//         product_descript: 'Dindon rouge',
//         birth_date: new Date('2024-12-30'),
//         life_duration: 10,
//         product_image: 'https://res.cloudinary.com/ddwgsvzlw/image/upload/v1735054489/Dindon1_xxqmc4.jpg',
//         price: 15,
//         farm: 2,
//         category: 1,
//         createdAt: DateTime.now(),
//         updatedAt: DateTime.now(),
//       },
//       {
//         product_name: 'Poulet',
//         product_descript: 'Poulet fermier',
//         birth_date: new Date('2024-06-15'),
//         life_duration: 12,
//         product_image: 'https://res.cloudinary.com/ddwgsvzlw/image/upload/v1735054488/Poulet1.jpg',
//         price: 12,
//         farm: 1,
//         category: 1,
//         createdAt: DateTime.now(),
//         updatedAt: DateTime.now(),
//       },
//       {
//         product_name: 'Agneau',
//         product_descript: 'Agneau de lait',
//         birth_date: new Date('2024-07-01'),
//         life_duration: 8,
//         product_image: 'https://res.cloudinary.com/ddwgsvzlw/image/upload/v1735054487/Agneau1.jpg',
//         price: 20,
//         farm: 3,
//         category: 2,
//         createdAt: DateTime.now(),
//         updatedAt: DateTime.now(),
//       },
//       // Ajoutez d'autres produits ici
//     ];

//     for (const productData of products) {
//       const product = await Product.create(productData);
//       await product.save(); // Cette ligne est optionnelle, car `create` sauvegarde déjà le produit.
//     }
//   }
// }
