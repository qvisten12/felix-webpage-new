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
}

const Card: FC<Props> = ({ primaryText = '', secondaryText = '', description = '', imageUrl = '', backgroundColor = '', useAsRef, href = '/' }) => {
  return (
    <div tabIndex={0} id={useAsRef ? 'work' : ''} className="flex justify-between flex-col lg:flex-row gap-5">
      <div className="order-2 lg:order-1 flex flex-col justify-center items-start gap-2 tracking-wider w-full md:w-1/2">
        <h4 className="opacity-50 text-xl font-sfBold ">{primaryText}</h4>
        <h3 className="text-4xl font-sfBold">{secondaryText}</h3>
        <p className="font-akuratLight text-xl">{description}</p>
        <Link href={href} className="py-3 px-10 w-full sm:w-fit text-center mt-2 text-lg bg-black text-white font-sfBold rounded-md">
          Read More
        </Link>
      </div>
      <div className={`${styles.cardImage} order-1 lg:order-2 relative`} style={{ backgroundColor: `${backgroundColor}` }}>
        <div className="absolute w-full h-full">
          <Link href={href}>
            <Image src={imageUrl} quality={80} fill={true} loading="lazy" alt={secondaryText} />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Card
