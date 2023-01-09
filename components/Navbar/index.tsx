import React, { useEffect, useRef } from 'react'
import Router from 'next/router'
import Logo from '../Logo'

import { useRouter } from 'next/router'
import ActiveLink from '../ActiveLink'

const Navbar = () => {
  const router = useRouter()

  const navRef = useRef<HTMLElement>(null)
  let prevScrollPos: Number | String
  if (typeof window !== 'undefined') {
    prevScrollPos = typeof window.pageYOffset
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    const reset = () => (navRef.current!.style.top = '0')

    Router.events.on('routeChangeComplete', reset)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      Router.events.off('routeChangeComplete', reset)
    }
  })

  useEffect(() => {
    router.events.on('routeChangeComplete', () => {})
    return () => {
      router.events.off('routeChangeComplete', () => {})
    }
  }, [router.events])

  function handleScroll() {
    let currentScrollPos = window.pageYOffset

    if (prevScrollPos > currentScrollPos) {
      navRef.current!.style.top = '0'
    } else {
      if (currentScrollPos < 1) {
        return
      }
      navRef.current!.style.top = '-180px'
    }
    prevScrollPos = currentScrollPos
  }

  return (
    <>
      <nav
        style={{
          transition: 'top 0.6s',
        }}
        ref={navRef}
        className="py-6 px-5 md:px-10 fixed top-0 w-full z-40 bg-white opacity-100 lg:opacity-90"
      >
        <div className="w-full flex justify-between items-center">
          <div>
            <Logo Text="Felix  Ljungqvist" />
          </div>

          <div className="flex justify-between items-baseline w-28">
            <ActiveLink href="/"> Work </ActiveLink>
            <ActiveLink href="/about"> About </ActiveLink>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
