import React from 'react'

const Header = () => {
  return (
    <div className="mb-32 flex flex-col gap-5">
      <h2 className="text-lg uppercase text-gray-500 font-sfBold">Hi, I&apos;m Felix</h2>
      {/* <h1 className="text-2xl md:text-5xl font-sfRegular text-black " style={{ lineHeight: '1.5' }}>
        Front-end developer <br /> currently based in Gothenburg.
      </h1> */}
      <h1 className="text-2xl md:text-4xl lg:text-6xl font-sfBold text-black tracking-wider">I help produce amazing systems and create inclusive experiences 🚀</h1>
      <h3 className="text-lg md:text-xl font-akuratLight">
        Right now, I&apos;m inventing new ways to make work meaningful at <span className="text-blue-600">Motorit</span>.
      </h3>
    </div>
  )
}

export default Header
