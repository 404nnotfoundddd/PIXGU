import { generateState } from 'arctic'
import { github } from '@/auth/lucia/providers'
import { cookies } from 'next/headers'
import { env } from '@/env/server'

export async function GET(): Promise<Response> {
  const state = generateState()
  const url = await github.createAuthorizationURL(state, {
    scopes: ['read:user'],
  })

    ; (await cookies()).set('github_oauth_state', state, {
      path: '/',
      secure: env.NODE_ENV === 'production',
      httpOnly: true,
      maxAge: 60 * 10,
      sameSite: 'lax',
    })

  return Response.redirect(url)
}
