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
    // t.nonNull.int('id')
    // t.string('name')
    // t.nonNull.string('email')
    // t.nonNull.list.nonNull.field('posts', {
    //   type: 'Post',
    //   resolve: (parent, _, context: Context) => {
    //     return context.prisma.user
    //       .findUnique({
    //         where: { id: parent.id || undefined },
    //       })
    //       .posts()
    //   },
    // })
  },
})