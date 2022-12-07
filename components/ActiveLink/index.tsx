import { useRouter } from 'next/router'
import Link from 'next/link'
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'

interface Props {
  href?: string
  children?: any
}

const ActiveLink = ({ href = '', children, ...rest }: Props) => {
  const router = useRouter()

  const useLoaded = () => {
    const [loaded, setLoaded] = useState(false)
    useEffect(() => setLoaded(true), [])
    return loaded
  }
  const mounted = useLoaded()

  const isActive = router.asPath === href

  const activeLinkBgColor = 'text-black font-akuratNormal'

  const themeBgHover = 'font-akuratLight'

  const activeLinkAndNotActiveColor = isActive ? activeLinkBgColor : themeBgHover

  const className = `${activeLinkAndNotActiveColor} text-xl flex justify-center items-center`

  return (
    <Link href={href} passHref {...rest}>
      <span className={className} aria-current={isActive ? 'page' : undefined}>
        {children}
      </span>
    </Link>
  )
}

ActiveLink.propTypes = {
  href: PropTypes.string.isRequired,
}

export default ActiveLink
