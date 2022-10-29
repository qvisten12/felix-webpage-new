import React, { useEffect, useRef, useState } from 'react'
import Router from 'next/router'
import Logo from '../Logo'
import Link from 'next/link'
import styles from './Navbar.module.css'
import { motion } from 'framer-motion'

import { useRouter } from 'next/router'

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)

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

  const gotoElement = (id: any) => {
    router.push('/')

    setTimeout(() => {
      const element = document.getElementById(id)
      window.scrollTo({
        top: element!.offsetTop - 50,
        behavior: 'smooth',
      })
    }, 500)
  }

  const variants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: '-100%' },
  }

  return (
    <>
      <nav
        style={{
          transition: 'top 0.6s',
        }}
        ref={navRef}
        className="py-6 px-6 fixed top-0 w-full z-40 bg-black opacity-100 lg:opacity-90"
      >
        <div className="w-full flex justify-between items-center">
          <button
            aria-expanded={navbarOpen}
            aria-haspopup="true"
            aria-label="Menu"
            className={` ${navbarOpen ? `${styles.active}` : ''} ${styles.burger}`}
            onClick={() => {
              setNavbarOpen(!navbarOpen)
            }}
          >
            <span className="bg-white" aria-hidden="true"></span>
            <span className="bg-white" aria-hidden="true"></span>
          </button>

          <div className={`${navbarOpen ? 'hidden' : ''}`}>
            <Logo Text="Felix  Ljungqvist" />
          </div>
        </div>

        <motion.div
          animate={navbarOpen ? 'open' : 'closed'}
          variants={variants}
          transition={{ duration: 0.2 }}
          className={`gap-7 mt-2  flex-col text-5xl  p-2 items-start w-full 
          font-sfRegular
        ${navbarOpen ? 'flex h-screen items-center' : 'hidden'}`}
        >
          <button onClick={() => gotoElement('work')}>
            <a className={`text-white`}>Work</a>
          </button>
          <Link className={`text-white`} href="/about">
            About
          </Link>
          <Link className={`text-white`} href="/contact">
            Contact
          </Link>

          <a href="https://github.com/qvisten12/felix-webpage" rel="noreferrer nofollow" target="_blank" className={` text-white `}>
            Source
          </a>
        </motion.div>
      </nav>
    </>
  )
}

export default Navbar
