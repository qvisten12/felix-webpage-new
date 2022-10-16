import React, { useContext } from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <div className="mb-32">
      <h1 className="text-2xl md:text-5xl font-sfRegular text-white " style={{ lineHeight: '1.5' }}>
        Front-end developer <br /> currently based in Gothenburg.
      </h1>
    </div>
  )
}

export default Header
