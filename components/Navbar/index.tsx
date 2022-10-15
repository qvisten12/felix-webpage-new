import React, { FC, useContext, useEffect, useRef, useState } from 'react'
import Router from 'next/router'
import Logo from '../Logo'
import Link from 'next/link'
import styles from './Navbar.module.css'
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs'

import { useRouter } from 'next/router'
import { IContext, MyContext } from '../../pages/_app'

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  const value = useContext<IContext>(MyContext)

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
    router.events.on('routeChangeComplete', () => {
      setNavbarOpen(false)
    })
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
      setNavbarOpen(false)
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
        className="flex flex-col lg:flex-row py-6 md:py-12 lg:py-14 px-8 md:px-16 lg:px-16 items-center justify-between fixed top-0 w-screen z-40 bg-white opacity-100 lg:opacity-90 dark:bg-zinc-900"
      >
        <div className="w-full lg:w-auto flex justify-between items-center">
          <div className={`${navbarOpen ? 'hidden' : ''}`}>
            <Logo Text="Felix  Ljungqvist" />
          </div>

          <div className={`flex items-center gap-5 lg:hidden ${navbarOpen ? 'w-full justify-end' : ''}`}>
            <button onClick={(e) => value.toggleTheme(e)}>{value.mode ? <BsFillSunFill color="white" size={25} /> : <BsFillMoonFill color="black" size={25} />}</button>
            <button
              aria-expanded={navbarOpen}
              aria-haspopup="true"
              aria-label="Menu"
              className={` ${navbarOpen ? `${styles.active}` : ''} ${styles.burger}`}
              onClick={() => {
                setNavbarOpen(!navbarOpen)
              }}
            >
              <span className="bg-black dark:bg-white" aria-hidden="true"></span>
              <span className="bg-black dark:bg-white" aria-hidden="true"></span>
            </button>
          </div>
        </div>

        <div
          className={`lg:flex gap-7 mt-2 lg:mt-0 flex-col text-5xl lg:text-base lg:flex-row p-2 lg:p-0 items-start w-full lg:w-fit
          font-medium
        ${navbarOpen ? 'flex h-screen items-center' : 'hidden'} ${styles.parent}`}
        >
          <Link href="/work">
            <a className={`text-black dark:text-white ${styles.child}`}>Work</a>
          </Link>
          <Link href="/about">
            <a className={`text-black dark:text-white ${styles.child}`}>About</a>
          </Link>
          <Link href="/contact">
            <a className={`text-black dark:text-white ${styles.child}`}>Contact</a>
          </Link>

          <a href="https://github.com/qvisten12/felix-webpage" rel="noreferrer nofollow" target="_blank" className={` text-black dark:text-white ${styles.child}`}>
            Source
          </a>
          <button className="hidden lg:block" onClick={(e) => value.toggleTheme(e)}>
            {value.mode ? <BsFillSunFill color="white" size={25} className={`${styles.child}`} /> : <BsFillMoonFill color="black" className={`${styles.child}`} size={25} />}
          </button>
        </div>
      </nav>
    </>
  )
}

export default Navbar
