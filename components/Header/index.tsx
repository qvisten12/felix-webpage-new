import React, { useContext } from 'react'
import Image from 'next/image'
import { IContext, MyContext } from '../../pages/_app'

const Header = () => {
  const value = useContext<IContext>(MyContext)

  return (
    <div className="flex flex-col justify-center items-center  text-center dark:text-white mt-44 mb-80">
      <h1 className="font-medium md:font-semibold text-4xl md:text-8xl ">Developer specialized in front-end development</h1>
      <div className="flex mt-14 items-center ">
        <p className="text-2xl">Employed at </p>
        <div
          style={{
            position: 'relative',
            width: '100px',
            height: '100px',
          }}
        >
          <Image src={`${value.mode ? '/images/bilia-white.png' : '/images/bilia.png'}`} alt="motorit" layout="fill" objectFit="contain"></Image>
        </div>
      </div>
    </div>
  )
}

export default Header
