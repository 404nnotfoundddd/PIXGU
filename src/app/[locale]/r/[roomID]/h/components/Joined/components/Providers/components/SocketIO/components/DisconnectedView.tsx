import BackButton from '@/components/BackButton';
import ToHomeButton from '@/components/ToHomeButton';
import Link from 'next/link';
import { NeedHelpBtn } from './NeedHelp';
import type { Locale } from '@/types/locale';

export const DisconnectedView = ({ errors, locale }: Props) => (
  <div className='selection:!bg-rose-600 bg-gradient-to-tr from-rose-500 to-rose-400 flex h-full w-full flex-col items-center justify-center gap-6 rounded-lg text-white'>
    <div className='flex flex-col gap-1 items-center'>
      <div className="font-[700] text-[2.6rem]">
        {'Disconnected from server'}
      </div>
      <div className="text-[#ffffffcc] flex flex-row gap-1">
        <div className='text-white'>ERROR CODES: </div>
        <div>{errors.join(' | ') || 'REASON UNKNOWN'}</div>
      </div>
    </div>
    <div className='flex flex-col gap-1 items-center'>
      <div className="flex flex-row gap-4 pt-3">
        <BackButton className="rounded-md bg-[#ffffff2b] px-2 py-1">Back</BackButton>
        <ToHomeButton className="rounded-md bg-[#ffffff2b] px-2 py-1">Home</ToHomeButton>
        <Link href='/join' className="rounded-md bg-[#ffffff2b] px-2 py-1">
          Go to active rooms
        </Link>
        <NeedHelpBtn locale={locale} />
      </div>
    </div>
  </div>
)

type Props = {
  errors: string[]
  locale: Locale
}