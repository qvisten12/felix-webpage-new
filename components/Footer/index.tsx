import React from 'react'

const Footer = () => {
  return (
    <div className="flex justify-between flex-col my-20 px-6 md:px-20">
      <hr />

      <div className="flex flex-col-reverse items-center justify-between md:flex-row mt-5 font-sfRegular text-sm opacity-80 text-white">
        <p className="mt-5 md:mt-0">© 2022 Felix Ljungqvist</p>

        <div className="flex gap-4">
          <a href="mailto:felixljungqvist@icloud.com">Email</a>|<a href="https://www.twitter.com">Twitter</a> |<a href="">LinkedIn </a> | <a href="">Dribbble </a>|<a href="">Medium</a>
        </div>

        <div></div>
      </div>
    </div>
  )
}

export default Footer
