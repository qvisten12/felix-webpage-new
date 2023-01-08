import { ReactNode } from 'react'
import Footer from '../Footer'
import Navbar from '../Navbar'

interface Props {
  children: ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <div className={` flex flex-col justify-between h-full bg-white`}>
      <Navbar />
      <div className="mt-32 mb-10 md:mb-20 px-5 sm:px-10 md:px-16 lg:px-24 xl:px-32">{children}</div>
      <Footer />
    </div>
  )
}

export default Layout
