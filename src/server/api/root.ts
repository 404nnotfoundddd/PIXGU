// https://trpc.io/docs/server/routers#defining-a-router

import { createTRPCRouter } from '@/server/api/trpc'

import {
  userRouter,
  announcementRouter,
  articleRouter,
  authRouter,
  gameRoomRouter,
} from './router'
import { settingsRouter } from './router/settings'

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  auth: authRouter,
  user: userRouter,
  settings: settingsRouter,
  article: articleRouter,
  gameRoom: gameRoomRouter,
  announcement: announcementRouter,
})

// Export only the type of a router!
// This prevents us from importing server code on the client.
export type AppRouter = typeof appRouter
