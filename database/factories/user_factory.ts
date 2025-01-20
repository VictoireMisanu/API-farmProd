// database/factories/UserFactory.ts
import factory from '@adonisjs/lucid/factories'
import User from '../../app/models/user.js'
import { DateTime } from 'luxon'
// import { Faker } from '@faker-js/faker'

export const UserFactory = factory
  .define(User, async ({ faker }) => {
    return {
      user_name: faker.person.fullName(),
      user_email: faker.internet.email(),
      user_password: faker.internet.password(),
      user_address: faker.location.streetAddress(),
      user_picture: faker.image.avatar(),

      user_role: 1,
      farm_id: null,

      createdAt: DateTime.fromJSDate(faker.date.past()),
      updatedAt: DateTime.fromJSDate(faker.date.past()),
    }
  })
  .build()
