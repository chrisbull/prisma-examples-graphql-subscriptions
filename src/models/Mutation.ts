import { arg, intArg, mutationType, nonNull, stringArg } from 'nexus'
import { Post } from 'nexus-prisma'
import { Context } from '../context'

export const Mutation = mutationType({
  definition(t) {
    t.field('createDraft', {
      type: 'Post',
      args: {
        title: arg(Post.title),
        content: arg(Post.content),
        authorEmail: stringArg(),
      },
      resolve: async (_, args, context: Context) => {
        const newPost = await context.prisma.post.create({
          data: {
            title: args.title,
            content: args.content,
            author: {
              connect: { email: args.authorEmail },
            },
          },
        })

        // publish the subscription here
        context.pubsub.publish('newPost', newPost)
        return newPost
      },
    })

    t.field('togglePublishPost', {
      type: 'Post',
      args: {
        id: nonNull(intArg()),
      },
      resolve: async (_, args, context: Context) => {
        try {
          const post = await context.prisma.post.findUnique({
            where: { id: args.id || undefined },
          })

          if (!post.published) {
            // publish the subscription here
            context.pubsub.publish('postPublished', post)
          }

          return context.prisma.post.update({
            where: { id: args.id || undefined },
            data: { published: !post?.published },
          })
        } catch (e) {
          throw new Error(
            `Post with ID ${args.id} does not exist in the database.`,
          )
        }
      },
    })
  },
})
