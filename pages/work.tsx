import React from 'react'
import Card from '../components/Card'

const Work = () => {
  return (
    <div>
      <h1 className="font-medium md:font-semibold text-4xl md:text-8xl text-center ">My Work</h1>
      <p className="text-center text-gray-600 text-lg mt-5 font-medium m-1 my-2">Here's a showcase of the latest projects i've worked on.</p>

      <div className="flex flex-col gap-10 mt-20">
        <Card primaryText="Branch Search" secondaryText="Bilia Anläggningar" imageUrl="/images/anlaggningar.png" bg={'bg-red-100 dark:bg-red-900'} text="text-red-400 dark:text-red-200" />
        <Card
          primaryText="A hackerscroller clone with a more modern UI"
          secondaryText="HackerScroller"
          imageUrl="/images/hackerscroller-preview.png"
          text="text-blue-400 dark:text-blue-200"
          bg={'bg-blue-100 dark:bg-blue-900'}
        />
        <Card
          primaryText="Weather application"
          secondaryText="Yutu Weather"
          imageUrl="/images/yutu-preview.png"
          text="text-emerald-400 dark:text-emerald-200"
          bg={'bg-emerald-100 dark:bg-emerald-900'}
        />
      </div>
    </div>
  )
}

export default Work
