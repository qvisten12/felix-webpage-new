import Head from 'next/head'
import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'

const Card = dynamic(() => import('../components/Card'))

const About = () => {
  return (
    <div>
      <Head>
        <title>Felix Ljungqvist - About Me</title>
        <html lang="en" />
      </Head>

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
          primaryText="Felix Ljungqvist"
          secondaryText="Thinker, Maker, Storyteller."
          isAbout={true}
          description="Hi! I’m Felix- a front-end developer based out of Gothenburg, Sweden. I'm currently a Junior front-end developer at Motorit, where I'm inventing new ways to make work meaningful.
          ‍
          I pursued my graduate studies in Systems Science at Borås College. I dedicated my thesis to leveraging the power of javascript frameworks like Qwik and Astro in order to build fast web applications with zero javascript.
          
          If you have any inquiries or would like to collaborate on a project, please don’t hesitate to contact me!"
          imageUrl="/images/felix.png"
        />
      </motion.section>
    </div>
  )
}

export default About
