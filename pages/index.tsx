import type { NextPage } from 'next'
import Head from 'next/head'
import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'

const Header = dynamic(() => import('../components/Header'))
const Card = dynamic(() => import('../components/Card'))

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Felix Ljungqvist - Work</title>
        <html lang="en" />
      </Head>
      <Header />

      <motion.section
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            scale: 0.8,
            opacity: 0,
          },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
              delay: 0.4,
            },
          },
        }}
        className="flex flex-col gap-14 lg:gap-32"
      >
        <Card
          useAsRef={true}
          primaryText="Bilia"
          secondaryText="Branches"
          description="A complete revamp of Bilia's branch search layout."
          imageUrl="/images/anlaggningar.webp"
          backgroundColor="rgb(205,225,179)"
        />

        <Card
          primaryText="Personal Project"
          secondaryText="HackerScroller Clone"
          description="A redesign of hackerscroller, with a new slimer and more modern look."
          imageUrl="/images/hackerscroller.webp"
          backgroundColor="#B4E7FC"
        />

        <Card primaryText="Personal Project" secondaryText="Yutu Weather" description="A weather app, designed to be easy and fast." backgroundColor="#ece3d3" imageUrl="/images/yutu.webp" />
      </motion.section>
    </div>
  )
}

export default Home
