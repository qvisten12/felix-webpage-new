import type { NextPage } from 'next'
import Head from 'next/head'
import Card from '../components/Card'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Felix Ljungqvist - Portfolio</title>
      </Head>
      <Header />
      <Card secondaryText="About me" imageUrl="/images/felix.png" />
      <p className="font-medium text-4xl text-center my-40 dark:text-white">By writing front-end code, I help produce amazing systems with a create inclusive experiences.</p>
      <div className="flex flex-col gap-10">
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

export default Home
