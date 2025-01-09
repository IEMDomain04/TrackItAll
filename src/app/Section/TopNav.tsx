import Image from 'next/image'
import React from 'react'

const logos = [
    {src:"", alt:"", w:30, h:30},
    {src:"", alt:"", w:30, h:30},
]

const TopNav = () => {
  return (
    <main>
      <section>
        <div>
            <h1></h1>
            <h1></h1>
        </div>

        <div>
            <Image src="" width={500} height={400} alt="" />
            <Image src="" width={500} height={400} alt="" />
        </div>
      </section>
    </main>
  )
}

export default TopNav
