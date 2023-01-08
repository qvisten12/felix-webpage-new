import type { NextPage } from 'next'
import Head from 'next/head'
import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import { content } from '../content/content'

const Header = dynamic(() => import('../components/Header'))
const Card = dynamic(() => import('../components/Card'))

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Felix Ljungqvist - Work</title>
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
        {content.projects.map((project) => {
          return (
            <Card
              key={project.slug}
              primaryText={project.data.subTitle}
              secondaryText={project.data.title}
              description={project.data.info}
              imageUrl={project.data.featuredImg}
              backgroundColor={project.data.backgroundColor}
              href={project.slug.toString()}
              {...project}
            />
          )
        })}
      </motion.section>
    </div>
  )
}

export default Home
