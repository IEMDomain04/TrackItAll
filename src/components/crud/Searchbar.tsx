import Image from 'next/image'
import React from 'react'

const Searchbar = () => {
  return (
    <div className="flex">
            <div className="flex items-center border bg-white rounded-xl shadow">

              <input
                className="flex-grow px-4 py-2 outline-none rounded-xl"
                type="text"
                placeholder="Search place..."
              />

              <span className="px-3">
                <Image className='cursor-pointer m-1' src="/search-icon.svg" width={15} height={15} alt="Search Icon" />
              </span>

            </div>
          </div>
  )
}

export default Searchbar
