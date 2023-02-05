// /graphql/types/Link.ts
import { builder } from "../builder";

builder.prismaObject('Media', {
  fields: (t) => ({
    id: t.exposeID('id'),
    users: t.relation('users'),
    imageUrlKey: t.exposeString('imageUrlKey'),
  }),
})


builder.queryField('images', (t) =>
  t.prismaConnection({
    type: 'Media',
    cursor: 'id',
    resolve: (query, _parent, _args, _ctx, _info) =>
      prisma.media.findMany({ ...query })
  })
)

builder.queryField('image', (t) =>
  t.prismaField({
    type: 'Media',
    nullable: true,
    args: {
      id: t.arg.id({ required: true })
    },
    resolve: (query, _parent, args, _info) =>
      prisma.media.findUnique({
        ...query,
        where: {
          id: Number(args.id),
        }
      })
  })
)


builder.mutationField('createImage', (t) =>
  t.prismaField({
    type: 'Media',
    args: {
      imageUrlKey: t.arg.string({ required: true }),
    },
    resolve: async (query, _parent, args, ctx) => {
      const { imageUrlKey } = args

      if (!(await ctx).user) {
        throw new Error("You have to be logged in to perform this action")
      }

      const user = await prisma.user.findUnique({
        where: {
          email: (await ctx).user?.email,
        }
      })

      if (!user || user.role !== "ADMIN") {
        throw new Error("You don have permission ot perform this action")
      }

      return await prisma.media.create({
        ...query,
        data: {
          imageUrlKey,
        }
      })
    }
  })
)

builder.mutationField('updateImage', (t) =>
  t.prismaField({
    type: 'Media',
    args: {
      id: t.arg.id({ required: true }),
      imageUrlKey: t.arg.string(),
    },
    resolve: async (query, _parent, args, _ctx) =>
      prisma.media.update({
        ...query,
        where: {
          id: Number(args.id),
        },
        data: {
          imageUrlKey: args.imageUrlKey ? args.imageUrlKey : undefined,
        }
      })
  })
)

builder.mutationField('deleteImage', (t) =>
  t.prismaField({
    type: 'Media',
    args: {
      id: t.arg.id({ required: true })
    },
    resolve: async (query, _parent, args, _ctx) =>
      prisma.media.delete({
        ...query,
        where: {
          id: Number(args.id)
        }
      })
  })
)
