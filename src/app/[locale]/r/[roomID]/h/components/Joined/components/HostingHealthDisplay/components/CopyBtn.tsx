import { useEffectOnce } from '@/hooks/useEffectOnce'
import { useSpring, animated } from '@react-spring/web'
import { useRef, useState } from 'react'

type Props = {
  displayText1: string
  displayText2: string
}

export const CopyBtn = ({ displayText1, displayText2 }: Props) => {
  const [isCopied, setIsCopied] = useState<boolean>(false)
  const divRef = useRef<HTMLDivElement>(document.createElement('div'))
  const copiedTimeout = useRef<ReturnType<typeof setTimeout>>()

  useEffectOnce(() => {
    const url = window.location.href

    divRef.current.textContent = url
      .replace(`${url.split('/')[3]}/`, '')
      .replace('/h', '')
    return () => {
      clearTimeout(copiedTimeout.current)
    }
  })

  const [springs, api] = useSpring(() => ({
    from: {
      scale: 1,
      opacity: 1,
    },
    config: {
      duration: 400,
    },
  }))

  const handleClick = async () => {
    clearTimeout(copiedTimeout.current)
    copiedTimeout.current = setTimeout(() => {
      setIsCopied(false)
    }, 2000)

    setIsCopied(true)
    await navigator.clipboard.writeText(divRef.current.textContent!)

    api.start({
      from: {
        scale: 0.9,
        opacity: 0.7,
      },
      to: {
        scale: 1,
        opacity: 1,
      },
    })
  }

  return (
    <animated.button
      onClick={handleClick}
      style={springs}
      className="!hover:opactiy-60 rounded-md bg-[#ffffff82] px-4 leading-8 text-[#02020285] disabled:cursor-not-allowed disabled:opacity-65"
    >
      {isCopied ? displayText1 : displayText2}
    </animated.button>
  )
}
