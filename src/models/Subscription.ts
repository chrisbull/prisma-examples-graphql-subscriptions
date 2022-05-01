import { Post } from '@prisma/client'
import { subscriptionType } from 'nexus'
import { Context } from '../context'

export const Subscription = subscriptionType({
  definition(t) {
    t.field('newPost', {
      type: 'Post',
      subscribe(_root, _args, ctx: Context) {
        return ctx.pubsub.asyncIterator('newPost')
      },
      resolve(payload: Post) {
        return payload
      },
    })

    t.field('postPublished', {
      type: 'Post',
      subscribe(_root, _args, ctx: Context) {
        return ctx.pubsub.asyncIterator('postPublished')
      },
      resolve(payload: Post) {
        return payload
      },
    })
  },
})