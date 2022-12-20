import Link from 'next/link'
import Head from 'next/head'

const FourOhFour = () => {
  return (
    <div className="my-48 md:mt-32 flex flex-col justify-center items-center mx-2 md:mx-0  text-black">
      <Head>
        <title>404 - Page not found</title>
      </Head>
      <h1 className="font-bold text-7xl   tracking-wide">404</h1>
      <div
        className="w-7/12 h-96 hidden md:block"
        style={{
          height: '400px',
          backgroundPosition: 'center',
          backgroundImage: 'url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif)',
        }}
      ></div>
      <p className="text-black font-semibold text-xl md:text-4xl tracking-wide">Seems like you&apos;re lost</p>
      <p className=" text-black font-normal text-sm md:text-base  tracking-wide mt-2">the page you&apos;re looking for doesn&apos;t exist!</p>
      <Link
        className="border-blue-500 border-2 p-2 mt-5
                    rounded-md text-blue-500 text-2xl font-semibold
                    hover:bg-blue-500 hover:text-white"
        href="/"
      >
        Take me home
      </Link>
    </div>
  )
}

export default FourOhFour
