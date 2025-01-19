import Image from 'next/image'
import React from 'react'

const logos = [
  { src: "/user-icon.svg", alt: "user", size: 40 },
]

const TopNav = () => {
  return (
    <main>
      <section className='w-full px-20 py-5 flex justify-between shadow-md max-sm:px-8'>
        <h1 className='text-h1 font-bold'>TrackItAll</h1>

        <div className='flex space-x-8'>
          {logos.map((logo, index) => (
            <Image className='cursor-pointer duration-300 rounded hover:bg-slate-300 hover:px-1' key={index} src={logo.src} width={logo.size} height={logo.size} alt={logo.alt} />
          ))}
        </div>
      </section>
    </main>
  )
}

export default TopNav
