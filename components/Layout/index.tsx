import React, { ReactNode, useContext } from 'react'
import Footer from '../Footer'
import Navbar from '../Navbar'

interface Props {
  children: ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <div className={` flex flex-col justify-between h-full dark:bg-zinc-900`}>
      <Navbar />

      <div className="mt-32 md:mt-56 container max-w-6xl mx-auto mb-10 md:mb-20 px-8 md:px-16 lg:px-16 xl:px-0">
        {children}

        <hr className="my-40" />

        <Footer />
      </div>
    </div>
  )
}

export default Layout
