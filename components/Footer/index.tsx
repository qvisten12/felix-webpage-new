import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <div className="flex justify-between flex-col my-20 dark:text-white">
      <div className="flex flex-col md:flex-row justify-between font-medium md:font-semibold gap-12 md:gap-20 ">
        <h4 className=" text-4xl md:text-8xl ">Let&apos;s connect digitally</h4>
        <div className={`font-semibold text-2xl md:text-4xl flex flex-col gap-4 ${styles.parent}`}>
          <a href="mailto:felixljungqvist@icloud.com" className={` text-black dark:text-white ${styles.child}`}>
            Email
          </a>
          <a href="" className={` text-black dark:text-white ${styles.child}`}>
            Twitter
          </a>
          <a href="" className={` text-black dark:text-white ${styles.child}`}>
            LinkedIn
          </a>
          <a href="" className={` text-black dark:text-white ${styles.child}`}>
            Instagram
          </a>
          <a href="" className={`text-black dark:text-white ${styles.child}`}>
            Dribbble
          </a>
          <a href="" className={` text-black dark:text-white ${styles.child}`}>
            Medium
          </a>
        </div>
      </div>

      <p className="font-semibold text-lg mt-10 md:mt-3">© 2022 Felix Ljungqvist</p>
    </div>
  )
}

export default Footer
