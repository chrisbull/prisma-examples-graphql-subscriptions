import { objectType } from 'nexus'
import { User } from 'nexus-prisma'

export const Users = objectType({
  name: User.$name,
  description: User.$description,
  definition(t) {
    t.field(User.id)
    t.field(User.name)
    t.field(User.email)
    t.field(User.posts)
    // Only if you need custom logic to the resolver
    // t.field({
    //   ...User.posts,
    //   async resolve(...args) {
    //       const result = await User.posts.resolve(...args)
    //       return result
    //   }
    // })
  },
})
