import Image from 'next/image'
import React, { FC } from 'react'
import styles from './Card.module.css'

interface Props {
  primaryText?: string
  secondaryText: string
  imageUrl: string
  bg?: string
  text?: string
}

const Card: FC<Props> = ({ primaryText = '', secondaryText = '', imageUrl = '', bg = '', text = '' }) => {
  return (
    <div className={`${styles.card} ${bg ? bg : styles.background} flex flex-col md:flex-row justify-between  cursor-pointer overflow-hidden `}>
      <div className="pb-0 md:pb-16 p-8 md:p-16 flex flex-col justify-between">
        <h2 className={`font-medium text-4xl  ${text ? text : 'text-black'} md:text-5xl  ${styles.cardTitle}`}>
          {primaryText ? primaryText : 'Nice to '}
          <span>
            <br />
            {primaryText ? '' : 'meet you'}
          </span>
        </h2>
        <p className={`font-medium text-2xl md:text-3xl mt-10 md:mt-0 ${styles.cardTeaser} ${text ? text : 'text-gray-400 md:text-black'}`}>{secondaryText}</p>
      </div>
      <div className="w-full md:w-1/2 h-full relative">
        <div className={`absolute top-0 md:right-0 ${styles.cardImage}`}>
          <Image src={imageUrl} layout="fill" objectFit="cover" />
        </div>
      </div>
    </div>
  )
}

export default Card
