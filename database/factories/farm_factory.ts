import factory from '@adonisjs/lucid/factories'
import Farm from '#models/farm'

export const FarmFactory = factory
  .define(Farm, async ({ faker }) => {
    return {}
  })
  .build()