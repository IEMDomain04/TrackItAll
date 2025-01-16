import React from 'react'
import Image from 'next/image'

const image = "/trash-icon.svg"

const Removebutton = () => {
  return (
    <div className='flex p-2 rounded cursor-pointer hover:bg-slate-300 hover:scale-95 active:bg-slate-400'>
      <Image src={image} width={30} height={30} alt='Trash Icon' />
    </div>
  )
}

export default Removebutton
