'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Img1 from '../../public/retro-games-1.png'
import Img2 from '../../public/retro-games-2.png'
import Img3 from '../../public/retro-games-3.png'
import Img4 from '../../public/retro-games-4.png'

export default function LandingArticle() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true)
    }, 100)

    return () => clearTimeout(timeout)
  }, [])

  return (
    <>
      <article className="w-4/5 space-y-6">
        <h1
          className={`large_text w-4/6 leading-tight transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        >
          Reviva os clássicos e preserve suas memórias!
        </h1>
        <div className="relative h-56 w-full">
          <Image
            src={Img1}
            width={200}
            height={0}
            priority
            alt="retro-games-stuffs"
            className={`absolute left-0 top-0 transform rounded shadow transition-transform duration-500 ${isVisible ? 'translate-x-4 translate-y-4 opacity-100' : '-translate-x-[10%] opacity-0'}`}
          />
          <Image
            src={Img2}
            width={200}
            height={0}
            priority
            alt="retro-games-stuffs"
            className={`absolute rotate-[5deg] transform rounded shadow transition-transform duration-500 ${isVisible ? 'left-[20%] top-6 translate-x-0 translate-y-0 opacity-100' : '-translate-x-[70%] -translate-y-[20px] rotate-[0deg] opacity-0'}`}
            style={{ transitionDelay: '50ms' }}
          />
          <Image
            src={Img3}
            width={200}
            height={0}
            priority
            alt="retro-games-stuffs"
            className={`absolute -rotate-[4deg] transform rounded shadow-lg transition-transform duration-500 ${isVisible ? 'left-[42%] top-4 translate-x-0 translate-y-0 opacity-100' : '-translate-x-[120%] -translate-y-[50px] rotate-[0deg] opacity-0'}`}
            style={{ transitionDelay: '100ms' }}
          />
          <Image
            src={Img4}
            width={200}
            height={0}
            priority
            alt="retro-games-stuffs"
            className={`absolute rotate-[2deg] transform rounded shadow-xl transition-transform duration-500 ${isVisible ? 'left-[60%] top-6 translate-x-0 translate-y-0 opacity-100' : '-translate-x-[170%] -translate-y-[80px] rotate-[0deg] opacity-0'}`}
            style={{ transitionDelay: '150ms' }}
          />
        </div>
      </article>
      <button
        className={`tertiary_button mt-20 w-1/4 transition-opacity delay-1000 duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      >
        Visitar a loja
      </button>
    </>
  )
}
