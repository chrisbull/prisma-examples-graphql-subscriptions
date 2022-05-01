import { objectType } from 'nexus'
import { Post } from 'nexus-prisma'

export const Posts = objectType({
  name: Post.$name,
  description: Post.$description,
  definition(t) {
    t.field(Post.id)
    t.field(Post.title)
    t.field(Post.authorId)
    t.field(Post.content)
    t.field(Post.published)
    t.field(Post.author)

    //     t.nonNull.int('id')
    //     t.nonNull.string('title')
    //     t.string('content')
    //     t.nonNull.boolean('published')
    //     t.field('author', {
    //       type: 'User',
    //       resolve: (parent, _, context: Context) => {
    //         return context.prisma.post
    //           .findUnique({
    //             where: { id: parent.id || undefined },
    //           })
    //           .author()
    //       },
    //     })
    //   },
  },
})

// const PostCreateInput = inputObjectType({
//   name: 'PostCreateInput',
//   definition(t) {
//     t.nonNull.string('title')
//     t.string('content')
//   },
// })
