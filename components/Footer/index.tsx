import React from 'react'
import Spotify from '../Spotify/Spotify'

const Footer = () => {
  return (
    <div className="flex justify-between flex-col mt-5 my-20 px-6 lg:px-32 2xl:px-64">
      <hr className="block sm:hidden" />

      <div className="flex flex-col lg:flex-row justify-between font-akuratNormal mt-5">
        <div className="flex gap-3 w-full lg:w-fit justify-center items-center text-base">
          <a className="hover:opacity-60" href="mailto:felixljungqvist@icloud.com">
            Email
          </a>
          |
          <a className="hover:opacity-60" href="https://twitter.com/LjungqvistFelix">
            Twitter
          </a>{' '}
          |
          <a className="hover:opacity-60" href="https://www.linkedin.com/in/felix-ljungqvist-422119181/">
            LinkedIn{' '}
          </a>
        </div>

        <div className="flex justify-center mt-5 lg:mt-0">
          <Spotify />
        </div>

        <p className="mt-5 lg:mt-0 font-akuratLight text-lg w-full lg:w-fit flex justify-center items-center">© 2022</p>
      </div>
    </div>
  )
}

export default Footer
