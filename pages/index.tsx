import type { NextPage } from 'next'
import Head from 'next/head'
import Card from '../components/Card'
import Header from '../components/Header'
import { IAlignment } from '../components/Card'
import { motion } from 'framer-motion'
import Drift from 'react-driftjs'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Felix Ljungqvist - Work</title>
      </Head>
      <Header />

      {/* https://app.drift.com/settings2/widget */}
      <Drift
        appId="3x2mum5y49zy"
        style={{
          bottom: '100px',
        }}
      />

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
        className="flex flex-col gap-32"
      >
        <Card
          useAsRef={true}
          primaryText="Bilia"
          secondaryText="Branches"
          description="A complete revamp of Bilia's branch search layout."
          imageUrl="/images/anlaggningar.png"
          alignment={IAlignment.start}
        />

        <Card
          primaryText="Personal Project"
          secondaryText="HackerScroller Clone"
          description="A redesign of hackerscroller, with a new slimer and more modern look."
          imageUrl="/images/hackerscroller-preview.png"
          alignment={IAlignment.center}
        />

        <Card primaryText="Personal Project" secondaryText="Yutu Weather" description="A weather app, designed to be easy and fast." imageUrl="/images/yutu-preview.png" alignment={IAlignment.start} />
      </motion.section>
    </div>
  )
}

export default Home
