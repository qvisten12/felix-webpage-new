import React, { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './Logo.module.css'

interface Props {
  Text?: string
}

const Logo: FC<Props> = ({ Text = '' }) => {
  return (
    <Link className={`font-sfRegular text-lg text-black relative h-8 w-8 `} href="/">
      <div className={`${styles.logoImg}`}>
        <Image src="/images/letter-f.png" fill={true} alt="" />
      </div>
    </Link>
  )
}

export default Logo
