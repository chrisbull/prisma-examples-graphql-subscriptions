import { GraphQLScalarType } from 'graphql'
import { JSONObjectResolver } from 'graphql-scalars'
import { asNexusMethod } from 'nexus'

const jsonScalar = new GraphQLScalarType({
  ...JSONObjectResolver,
  // Override the default 'JsonObject' name with one that matches what Nexus Prisma expects.
  name: 'Json',
})

export const JSON = asNexusMethod(jsonScalar, 'json')