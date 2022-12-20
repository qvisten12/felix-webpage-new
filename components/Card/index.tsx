import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'
import styles from './Card.module.css'

interface Props {
  primaryText: string
  secondaryText?: string
  description?: string
  href?: string
  imageUrl: string
  useAsRef?: boolean
  backgroundColor?: string
  isAbout?: boolean
}

const Card: FC<Props> = ({ primaryText = '', secondaryText = '', description = '', imageUrl = '', backgroundColor = '', useAsRef, href = '/', isAbout = false }) => {
  return (
    <div tabIndex={0} id={useAsRef ? 'work' : ''} className="flex justify-between flex-col lg:flex-row gap-5">
      <div className="order-2 lg:order-1 flex flex-col justify-center items-start gap-2 tracking-wider w-full xl:w-1/2">
        <h4 className="opacity-50 text-xl font-sfBold ">{primaryText}</h4>
        <h3 className="text-4xl font-sfBold">{secondaryText}</h3>
        <p className="font-akuratLight text-xl">{description}</p>

        {!isAbout ? (
          <Link aria-label="Read more about this project" href={href} className="py-3 px-10 w-full sm:w-fit text-center mt-2 text-lg bg-black text-white font-sfBold rounded-md hover:opacity-75">
            Read More
          </Link>
        ) : (
          <div className="flex flex-col lg:flex-row gap-2 lg:gap-5 w-full lg:w-fit">
            <a
              aria-label="Check out my LinkedIn Profile"
              href="https://www.linkedin.com/in/felix-ljungqvist-422119181/"
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-10 w-full text-center mt-2 text-lg bg-black text-white font-sfBold rounded-md hover:opacity-75"
            >
              LinkedIn
            </a>
            <a
              aria-label="Send me an email"
              href="mailto:felixljungqvist@icloud.com"
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-10 w-full text-center mt-2 text-lg bg-black text-white font-sfBold rounded-md hover:opacity-75"
            >
              Email
            </a>
            <a
              aria-label="Check out my Twitter Profile"
              href="https://twitter.com/LjungqvistFelix"
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-10 w-full text-center mt-2 text-lg bg-black text-white font-sfBold rounded-md hover:opacity-75"
            >
              Twitter
            </a>
          </div>
        )}
      </div>
      <div className={`${styles.cardImage} order-1 lg:order-2 relative hover:scale-105 hover:transition-transform`} style={{ backgroundColor: `${backgroundColor}` }}>
        <div className="absolute w-full h-full ">
          <Link aria-label="Read more about this project" href={href}>
            <Image src={imageUrl} quality={80} fill={true} loading="lazy" alt={secondaryText} />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Card
