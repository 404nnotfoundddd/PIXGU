import { z } from 'zod'
import { publicProcedure } from '@/server/api/trpc'
import { user } from '@/schema/user'
import { eq } from 'drizzle-orm'

export const getUserByUsernameID = publicProcedure
  .input(
    z.string({
      invalid_type_error: 'Input Type Error: Expected input type is string',
    }),
  )
  .query(async ({ ctx, input }) => {
    const userResult = await ctx.db
      .select({
        id: user.id,
        username: user.username,
        usernameID: user.usernameID,
        usernameWithUsernameID: user.usernameWithUsernameID,
        profilePicture: user.profilePicture,
      })
      .from(user)
      .where(eq(user.usernameID, input))

    return userResult
  })
