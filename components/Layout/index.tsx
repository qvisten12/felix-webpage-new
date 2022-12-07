import React, { ReactNode, useContext } from 'react'
import Footer from '../Footer'
import Navbar from '../Navbar'

interface Props {
  children: ReactNode
}

const Layout = ({ children }: Props) => {
  function scrollToTop() {
    document.body.scrollTop = 0 // For Safari
    document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
  }

  return (
    <div className={` flex flex-col justify-between h-full bg-white`}>
      <Navbar />
      <div className="mt-32 md:mt-64 mb-10 md:mb-20 px-5 sm:px-10 md:px-16 lg:px-24 xl:px-32">
        {children}

        {/* <div className="absolute bottom-60 right-0 block">
          <button onClick={() => scrollToTop()} title="Go to top" className="text-black text-5xl opacity-80 fixed bottom-60 ">
            ^
          </button>
        </div> */}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
