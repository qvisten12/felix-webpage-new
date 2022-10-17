import type { NextPage } from 'next'
import Head from 'next/head'
import Card from '../components/Card'
import Header from '../components/Header'
import { IAlignment } from '../components/Card'
import { motion } from 'framer-motion'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Felix Ljungqvist - Portfolio</title>
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
        className="flex flex-col gap-20"
      >
        <Card primaryText="Learn about my work" secondaryText="About me" imageUrl="/images/felix.png" alignment={IAlignment.end} />

        <Card useAsRef={true} primaryText="Branch search & filtering" secondaryText="Bilia Anläggningar" imageUrl="/images/anlaggningar.png" alignment={IAlignment.start} />
      </motion.section>

      <p className="font-sfRegular text-3xl text-end my-40 w-full md:pl-96 text-white">By writing front-end code, I help produce amazing systems and create inclusive experiences.</p>

      <section className="flex flex-col gap-20">
        <Card primaryText="Learn about my work" secondaryText="About me" imageUrl="/images/hackerscroller-preview.png" alignment={IAlignment.center} />

        <Card primaryText="Learn about my work" secondaryText="About me" imageUrl="/images/yutu-preview.png" alignment={IAlignment.start} />
      </section>
    </div>
  )
}

export default Home
