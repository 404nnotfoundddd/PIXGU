import { redisDb } from '@/db/redis'
import { cookies } from 'next/headers'

export const GuestName = async () => {
  const token = (await cookies()).get('guest_auth_session')?.value
  const ID = await redisDb.get(`guest:session:${token}:ID`)
  const name = await redisDb.get(`guest:${ID}:name_&_name_ID`)

  return (
    <div className="flex h-full items-center text-[2rem] text-white">
      {name}
    </div>
  )
}
