import React, { FC } from 'react'
import Link from 'next/link'

interface Props {
  Text?: string
}

const Logo: FC<Props> = ({ Text = '' }) => {
  return (
    <Link href="/">
      <a className={`font-semibold text-2xl text-black dark:text-white`}>{Text}</a>
    </Link>
  )
}

export default Logo
