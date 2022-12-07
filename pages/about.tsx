import type { NextPage } from 'next'
import Head from 'next/head'
import Card from '../components/Card'
import { IAlignment } from '../components/Card'
import { motion } from 'framer-motion'
import Drift from 'react-driftjs'

const About = () => {
  return (
    <div>
      <Head>
        <title>Felix Ljungqvist - About Me</title>
      </Head>

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
          primaryText="Felix Ljungqvist"
          secondaryText="Thinker, Maker, Storyteller."
          description="Hi! I’m Felix—a front-end developer based out of Gothenburg, Sweden. I'm currently a Junior front-end developer at Motorit, where I'm inventing new ways to make work meaningful.
          ‍
          I pursued my graduate studies at SVA’s Products of Design program. I dedicated my MFA thesis to leveraging the power of design in order to build stronger family environments—especially for families of low-income. Using research driven design methods, I created a suite of family products that allow for healthier childhood development in adverse conditions.
          
          In the past, I’ve worked on a wide range of projects that span both the physical and digital realms. I’ve built digital products for companies such as Samsung, BlackRock, MetLife and the Heart and Stroke Foundation. I also have experience bringing manufactured products to market, including children’s toys, medical devices, consumer electronics and sporting equipment.
          ‍
          My work has been featured in publications such as Fast Company and Thrive Global and has been recognized by Core77, ISDA, and IDA for award winning work.
          ‍
          If you have any inquiries or would like to collaborate on a project, please don’t hesitate to contact me!"
          imageUrl="/images/anlaggningar.png"
          alignment={IAlignment.start}
        />
      </motion.section>
    </div>
  )
}

export default About
