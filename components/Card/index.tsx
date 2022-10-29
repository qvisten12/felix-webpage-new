import Image from 'next/image'
import React, { FC } from 'react'
import styles from './Card.module.css'

interface Props {
  primaryText: string
  secondaryText?: string
  imageUrl: string
  alignment?: IAlignment
  useAsRef?: boolean
}

export enum IAlignment {
  start = 'items-start',
  end = 'items-end',
  center = 'items-center',
}

const Card: FC<Props> = ({ primaryText = '', secondaryText = '', imageUrl = '', alignment, useAsRef }) => {
  return (
    <div id={useAsRef ? 'work' : ''} className={` font-sfRegular text-white`}>
      <div className={`w-full flex flex-col ${alignment ? alignment : 'items-end'}`}>
        <div tabIndex={0} className={`${styles.card}`}>
          <div className={`${styles.cardImage} relative bg-white `}>
            <div className="absolute top-20 w-full h-full">
              <Image src={imageUrl} fill={true} alt="" />
            </div>
          </div>

          <div className="mt-5">
            <h2 className="opacity-90">{primaryText}</h2>
            <h3 className="opacity-70">{secondaryText}</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
